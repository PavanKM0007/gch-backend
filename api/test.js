const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ 
    message: 'GCH Backend API is running!',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    status: 'success',
    endpoints: {
      auth: '/api/auth',
      forms: '/api/forms',
      health: '/api/health'
    }
  });
});

app.get('/test', (req, res) => {
  res.json({ 
    message: 'Test endpoint working!',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
