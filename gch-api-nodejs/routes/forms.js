const express = require('express');
const Joi = require('joi');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken, optionalAuth } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

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
router.post('/submit', optionalAuth, async (req, res) => {
  try {
    const { error, value } = formSubmissionSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { form_type, name, email, phone, message, additional_data } = value;

    const formSubmission = await prisma.formSubmission.create({
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
      id: formSubmission.id,
      form_type: formSubmission.formType,
      name: formSubmission.name,
      email: formSubmission.email,
      phone: formSubmission.phone,
      message: formSubmission.message,
      additional_data: formSubmission.additionalData,
      submitted_at: formSubmission.submittedAt,
      user_id: formSubmission.userId
    });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all form submissions (admin only)
router.get('/submissions', authenticateToken, async (req, res) => {
  try {
    // Check if user is admin
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: 'Not enough permissions' });
    }

    const submissions = await prisma.formSubmission.findMany({
      orderBy: { submittedAt: 'desc' }
    });

    res.json(submissions.map(submission => ({
      id: submission.id,
      form_type: submission.formType,
      name: submission.name,
      email: submission.email,
      phone: submission.phone,
      message: submission.message,
      additional_data: submission.additionalData,
      submitted_at: submission.submittedAt,
      user_id: submission.userId
    })));
  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user's own form submissions
router.get('/my-submissions', authenticateToken, async (req, res) => {
  try {
    const submissions = await prisma.formSubmission.findMany({
      where: { userId: req.user.id },
      orderBy: { submittedAt: 'desc' }
    });

    res.json(submissions.map(submission => ({
      id: submission.id,
      form_type: submission.formType,
      name: submission.name,
      email: submission.email,
      phone: submission.phone,
      message: submission.message,
      additional_data: submission.additionalData,
      submitted_at: submission.submittedAt,
      user_id: submission.userId
    })));
  } catch (error) {
    console.error('Get user submissions error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
