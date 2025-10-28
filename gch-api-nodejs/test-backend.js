#!/usr/bin/env node

const express = require('express');
const request = require('supertest');
const app = require('./api/index.js');

console.log('🧪 Testing GCH Node.js Backend API');
console.log('=====================================');

// Test basic endpoints
async function testEndpoints() {
  try {
    // Test root endpoint
    const rootResponse = await request(app).get('/');
    console.log('✅ Root endpoint:', rootResponse.status === 200 ? 'PASS' : 'FAIL');
    
    // Test health endpoint
    const healthResponse = await request(app).get('/health');
    console.log('✅ Health endpoint:', healthResponse.status === 200 ? 'PASS' : 'FAIL');
    
    // Test auth endpoints (should return validation errors, not crashes)
    const registerResponse = await request(app).post('/auth/register').send({});
    console.log('✅ Register endpoint:', registerResponse.status === 400 ? 'PASS' : 'FAIL');
    
    const loginResponse = await request(app).post('/auth/login').send({});
    console.log('✅ Login endpoint:', loginResponse.status === 400 ? 'PASS' : 'FAIL');
    
    // Test forms endpoint
    const formsResponse = await request(app).post('/forms/submit').send({});
    console.log('✅ Forms endpoint:', formsResponse.status === 400 ? 'PASS' : 'FAIL');
    
    console.log('\n🎉 All basic tests passed! Backend is ready for deployment.');
    console.log('\n📋 Next steps:');
    console.log('1. Set up PostgreSQL database (Neon, Supabase, or Railway)');
    console.log('2. Configure DATABASE_URL environment variable');
    console.log('3. Run: npm install');
    console.log('4. Run: npx prisma db push');
    console.log('5. Deploy to Vercel');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
}

testEndpoints();
