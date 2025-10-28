const express = require('express');
const Joi = require('joi');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken, optionalAuth } = require('../middleware/auth');

const app = express();
const prisma = new PrismaClient();

// Security middleware
app.use(require('helmet')());
app.use(require('cors')({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'https://gch-app.vercel.app',
    'https://*.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(require('express').json({ limit: '10mb' }));
app.use(require('express').urlencoded({ extended: true }));

// Validation schema
const formSubmissionSchema = Joi.object({
  form_type: Joi.string().required(),
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().optional(),
  message: Joi.string().optional(),
  additional_data: Joi.object().optional()
});

// Submit form endpoint
app.post('/submit', optionalAuth, async (req, res) => {
  try {
    const { error, value } = formSubmissionSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { form_type, name, email, phone, message, additional_data } = value;

    // Create form submission
    const submission = await prisma.formSubmission.create({
      data: {
        formType: form_type,
        name,
        email,
        phone,
        message,
        additionalData: additional_data,
        userId: req.user ? req.user.id : null
      }
    });

    res.status(201).json({
      message: 'Form submitted successfully',
      submission: {
        id: submission.id,
        formType: submission.formType,
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        message: submission.message,
        submittedAt: submission.submittedAt
      }
    });

  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all form submissions (admin only)
app.get('/', authenticateToken, async (req, res) => {
  try {
    // Check if user is admin
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: 'Access denied. Admin privileges required.' });
    }

    const submissions = await prisma.formSubmission.findMany({
      orderBy: { submittedAt: 'desc' },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            fullName: true
          }
        }
      }
    });

    res.json({
      submissions: submissions.map(submission => ({
        id: submission.id,
        formType: submission.formType,
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        message: submission.message,
        additionalData: submission.additionalData,
        submittedAt: submission.submittedAt,
        user: submission.user
      }))
    });

  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user's form submissions
app.get('/my', authenticateToken, async (req, res) => {
  try {
    const submissions = await prisma.formSubmission.findMany({
      where: { userId: req.user.id },
      orderBy: { submittedAt: 'desc' }
    });

    res.json({
      submissions: submissions.map(submission => ({
        id: submission.id,
        formType: submission.formType,
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        message: submission.message,
        additionalData: submission.additionalData,
        submittedAt: submission.submittedAt
      }))
    });

  } catch (error) {
    console.error('Get user submissions error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
