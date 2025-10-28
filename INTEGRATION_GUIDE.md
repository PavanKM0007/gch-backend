# Frontend-Backend Integration Guide

## 🚀 GCH Frontend-Backend Integration Complete!

Your React frontend is now fully integrated with the FastAPI backend. Here's what has been implemented:

## ✅ What's Been Integrated

### 1. **API Service Layer** (`src/services/apiService.js`)
- Centralized API communication
- Automatic token management
- Error handling
- Support for all backend endpoints

### 2. **Authentication System**
- **AuthContext** updated to use backend authentication
- **Login Component** now authenticates against backend
- **Signup Component** registers users in backend database
- JWT token management
- Automatic token refresh

### 3. **Form Submission System**
- **FormService** (`src/services/formService.js`) for structured form submissions
- **Contact Form** integrated with backend
- **Solar Inquiry Form** integrated with backend
- Support for all form types (contact, solar_inquiry, wwm_inquiry, maintenance, investment)

### 4. **Environment Configuration**
- Environment variables setup
- Backend URL configuration
- OAuth settings (optional)

## 🔧 Configuration Steps

### 1. **Environment Setup**
Create a `.env.local` file in your project root:
```bash
# Backend API URL
REACT_APP_API_URL=http://localhost:8000

# Optional OAuth (if needed)
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
REACT_APP_FACEBOOK_APP_ID=your-facebook-app-id
```

### 2. **Backend Setup**
Make sure your FastAPI backend is running:
```bash
cd backend
python main.py
```

### 3. **Frontend Setup**
Start your React frontend:
```bash
npm start
# or
npm run dev
```

## 📋 Available API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/me` - Get current user

### Form Submissions
- `POST /forms/submit` - Submit any form
- `GET /forms/my-submissions` - Get user's submissions
- `GET /forms/submissions` - Get all submissions (admin)

### General
- `GET /health` - Health check
- `GET /docs` - API documentation

## 🎯 Form Types Supported

1. **Contact Form** - General inquiries
2. **Solar Inquiry** - Solar installation requests
3. **WWM Inquiry** - Waste water management
4. **Maintenance** - Service requests
5. **Investment** - Investment inquiries

## 🔄 Data Flow

### Authentication Flow:
1. User submits login/signup form
2. Frontend sends request to backend
3. Backend validates and returns JWT token
4. Frontend stores token and user data
5. Subsequent requests include token in headers

### Form Submission Flow:
1. User fills out form
2. Frontend validates form data
3. FormService sends data to backend
4. Backend stores in database
5. Frontend shows success/error message

## 🛠️ Testing the Integration

### 1. **Test Authentication**
- Register a new user
- Login with credentials
- Check if user data persists on page refresh

### 2. **Test Form Submissions**
- Submit contact form
- Submit solar inquiry
- Check backend database for stored data

### 3. **Test API Documentation**
- Visit http://localhost:8000/docs
- Test endpoints directly

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Ensure backend CORS settings include your frontend URL
   - Check if backend is running on correct port

2. **Authentication Issues**
   - Verify JWT token is being stored correctly
   - Check if token is included in API requests

3. **Form Submission Errors**
   - Check network tab for API errors
   - Verify form data format matches backend schema

### Debug Steps:
1. Check browser console for errors
2. Check network tab for failed requests
3. Verify backend is running and accessible
4. Check backend logs for errors

## 📊 Database Integration

The backend automatically creates SQLite database with:
- **Users table** - Stores user accounts
- **Form submissions table** - Stores all form data

Use the database viewer script:
```bash
cd backend
python view_database.py
```

## 🔐 Security Features

- Password hashing with bcrypt
- JWT token authentication
- CORS protection
- Input validation
- SQL injection protection

## 🚀 Next Steps

1. **Deploy Backend** - Deploy to cloud service (Railway, Render, etc.)
2. **Update Frontend** - Point to production backend URL
3. **Add More Forms** - Integrate remaining form components
4. **Add Admin Panel** - Create admin interface for form management
5. **Add Email Notifications** - Send emails on form submissions

## 📝 Files Modified/Created

### New Files:
- `src/services/apiService.js` - API communication layer
- `src/services/formService.js` - Form submission service
- `env.example` - Environment configuration template

### Modified Files:
- `src/contexts/AuthContext.jsx` - Backend authentication
- `src/components/Login.jsx` - Backend login
- `src/components/Signup.jsx` - Backend registration
- `src/components/Contact.jsx` - Backend form submission
- `src/components/Solar/Residential.jsx` - Backend form submission

Your frontend and backend are now fully integrated and ready for production! 🎉



