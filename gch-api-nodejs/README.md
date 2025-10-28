# GCH Backend API - Node.js/Express

A complete Node.js backend API for GCH Solar and Waste Water Management, converted from FastAPI to Express.js for Vercel deployment.

## 🚀 Features

- **Express.js** - Fast, unopinionated web framework
- **Prisma ORM** - Type-safe database access with PostgreSQL
- **JWT Authentication** - Secure token-based authentication
- **Bcrypt Password Hashing** - Secure password storage
- **Input Validation** - Joi schema validation
- **Rate Limiting** - 100 requests per 15 minutes
- **CORS Protection** - Configured for your domains
- **Security Headers** - Helmet middleware
- **Error Handling** - Comprehensive error management

## 📁 Project Structure

```
gch-api-nodejs/
├── api/
│   └── index.js          # Main API entry point for Vercel
├── routes/
│   ├── auth.js           # Authentication endpoints
│   └── forms.js          # Form submission endpoints
├── middleware/
│   ├── auth.js           # JWT authentication middleware
│   └── errorHandler.js   # Error handling middleware
├── prisma/
│   └── schema.prisma     # Database schema
├── package.json          # Dependencies
├── vercel.json          # Vercel deployment config
└── test-backend.js      # Testing script
```

## 🔧 API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `GET /auth/me` - Get current user (requires auth)

### Forms
- `POST /forms/submit` - Submit form (optional auth)
- `GET /forms/submissions` - Get all submissions (admin only)
- `GET /forms/my-submissions` - Get user's submissions (requires auth)

### System
- `GET /` - API info
- `GET /health` - Health check

## 🛠️ Setup

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (Neon, Supabase, or Railway)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env
   # Edit .env with your values
   ```

3. **Configure database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Test the API:**
   ```bash
   npm test
   ```

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "GCH Node.js backend"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables:
     - `SECRET_KEY` - Strong secret key
     - `DATABASE_URL` - PostgreSQL connection string
     - `NODE_ENV` - production

3. **Database Setup:**
   - Use Neon, Supabase, or Railway for PostgreSQL
   - Run `npx prisma db push` to create tables

## 🔐 Environment Variables

```env
SECRET_KEY=your-super-secret-key-here
DATABASE_URL=postgresql://username:password@host:port/database
NODE_ENV=production
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

## 📊 Database Schema

### Users Table
- `id` - Primary key
- `email` - Unique email
- `fullName` - User's full name
- `phone` - Phone number (optional)
- `hashedPassword` - Bcrypt hashed password
- `isActive` - Account status
- `isAdmin` - Admin privileges
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

### Form Submissions Table
- `id` - Primary key
- `formType` - Type of form submitted
- `name` - Submitter's name
- `email` - Submitter's email
- `phone` - Phone number (optional)
- `message` - Form message
- `additionalData` - JSON for extra fields
- `submittedAt` - Submission timestamp
- `userId` - Foreign key to users (optional)

## 🔒 Security Features

- JWT token authentication with expiration
- Password hashing with bcrypt
- Rate limiting protection
- CORS configuration
- Input validation and sanitization
- Security headers with Helmet
- Error handling without sensitive data exposure

## 🧪 Testing

Run the test suite:
```bash
npm test
```

The test script verifies:
- Basic endpoint functionality
- Error handling
- Authentication flow
- Form submission

## 📈 Performance

- Serverless deployment on Vercel
- Automatic scaling
- Global CDN distribution
- Optimized for cold starts
- Connection pooling with Prisma

## 🔄 Migration from FastAPI

This Node.js backend maintains 100% API compatibility with the original FastAPI version:

- Same endpoint URLs
- Same request/response formats
- Same authentication flow
- Same database schema
- Same business logic

## 📞 Support

- Vercel Documentation: https://vercel.com/docs
- Prisma Documentation: https://www.prisma.io/docs
- Express.js Documentation: https://expressjs.com/

## 📄 License

MIT License - see LICENSE file for details.
