/**
 * Integration Test Script
 * Tests the frontend-backend integration
 */

// Test API endpoints
const API_BASE_URL = 'http://localhost:8000';

async function testIntegration() {
  console.log('🧪 Testing Frontend-Backend Integration...\n');

  try {
    // Test 1: Health Check
    console.log('1️⃣ Testing Health Check...');
    const healthResponse = await fetch(`${API_BASE_URL}/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health Check:', healthData.status);
    console.log('   Timestamp:', healthData.timestamp);

    // Test 2: User Registration
    console.log('\n2️⃣ Testing User Registration...');
    const testUser = {
      email: 'test@example.com',
      full_name: 'Test User',
      phone: '+1234567890',
      password: 'testpassword123'
    };

    const registerResponse = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testUser)
    });

    if (registerResponse.ok) {
      const registerData = await registerResponse.json();
      console.log('✅ User Registration Successful');
      console.log('   User ID:', registerData.id);
      console.log('   Email:', registerData.email);
    } else {
      const errorData = await registerResponse.json();
      if (errorData.detail === 'Email already registered') {
        console.log('⚠️ User already exists (this is expected for repeated tests)');
      } else {
        console.log('❌ Registration failed:', errorData.detail);
      }
    }

    // Test 3: User Login
    console.log('\n3️⃣ Testing User Login...');
    const loginResponse = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: testUser.email,
        password: testUser.password
      })
    });

    if (loginResponse.ok) {
      const loginData = await loginResponse.json();
      console.log('✅ Login Successful');
      console.log('   Token received:', loginData.access_token ? 'Yes' : 'No');
      
      // Test 4: Get Current User
      console.log('\n4️⃣ Testing Get Current User...');
      const userResponse = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${loginData.access_token}`
        }
      });

      if (userResponse.ok) {
        const userData = await userResponse.json();
        console.log('✅ Get Current User Successful');
        console.log('   User:', userData.full_name);
        console.log('   Email:', userData.email);
      } else {
        console.log('❌ Get Current User failed');
      }

      // Test 5: Form Submission
      console.log('\n5️⃣ Testing Form Submission...');
      const formData = {
        form_type: 'contact',
        name: 'Test User',
        email: 'test@example.com',
        phone: '+1234567890',
        message: 'This is a test form submission',
        additional_data: {
          city: 'Hyderabad',
          service: 'Solar Installation'
        }
      };

      const formResponse = await fetch(`${API_BASE_URL}/forms/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginData.access_token}`
        },
        body: JSON.stringify(formData)
      });

      if (formResponse.ok) {
        const formSubmissionData = await formResponse.json();
        console.log('✅ Form Submission Successful');
        console.log('   Submission ID:', formSubmissionData.id);
        console.log('   Form Type:', formSubmissionData.form_type);
      } else {
        console.log('❌ Form Submission failed');
      }

    } else {
      console.log('❌ Login failed');
    }

    console.log('\n🎉 Integration Test Complete!');
    console.log('\n📋 Next Steps:');
    console.log('1. Start your React frontend: npm start');
    console.log('2. Test the forms in the browser');
    console.log('3. Check the database: python backend/view_database.py');
    console.log('4. View API docs: http://localhost:8000/docs');

  } catch (error) {
    console.error('❌ Integration test failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Make sure the backend is running: python backend/main.py');
    console.log('2. Check if port 8000 is available');
    console.log('3. Verify all dependencies are installed');
  }
}

// Run the test
testIntegration();



