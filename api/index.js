const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ 
    message: 'GCH Backend API is running!',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      auth: '/api/auth',
      forms: '/api/forms',
      health: '/api/health'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

module.exports = app;
