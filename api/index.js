const express = require('express');

const app = express();

// Basic middleware
app.use(express.json());

// Simple test endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'GCH Backend API is working!',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ 
    message: 'Test endpoint working!',
    timestamp: new Date().toISOString()
  });
});

// Simple auth test (no database)
app.post('/api/auth/test', (req, res) => {
  res.json({
    message: 'Auth endpoint working!',
    data: req.body,
    timestamp: new Date().toISOString()
  });
});

// Simple forms test (no database)
app.post('/api/forms/test', (req, res) => {
  res.json({
    message: 'Forms endpoint working!',
    data: req.body,
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl,
    method: req.method,
    timestamp: new Date().toISOString()
  });
});

module.exports = app;