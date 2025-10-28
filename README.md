# GCH Backend API (Node.js)

A Node.js/Express.js backend API for GCH Solar and Waste Water Management system.

## 🚀 Features

- **Authentication**: JWT-based user authentication
- **Form Submissions**: Handle contact forms and inquiries
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Vercel-ready serverless functions

## 📁 Project Structure

```
gch-api-nodejs/
├── api/
│   └── index.js          # Vercel serverless entry point
├── middleware/
│   ├── auth.js           # JWT authentication middleware
│   └── errorHandler.js   # Error handling middleware
├── routes/
│   ├── auth.js           # Authentication routes
│   └── forms.js          # Form submission routes
├── prisma/
│   └── schema.prisma     # Database schema
├── package.json          # Dependencies and scripts
├── vercel.json          # Vercel deployment config
└── env.example          # Environment variables template
```

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env
   # Edit .env with your database URL and JWT secret
   ```

3. **Set up database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run locally:**
   ```bash
   npm run dev
   ```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Forms
- `POST /api/forms/submit` - Submit contact form
- `GET /api/forms` - Get all form submissions (admin)
- `GET /api/forms/my` - Get user's form submissions

## 🚀 Deployment

This backend is configured for Vercel deployment:

1. **Connect to Vercel:**
   - Import from GitHub repository
   - Set environment variables in Vercel dashboard
   - Deploy automatically

2. **Database Setup:**
   - Use Vercel Postgres or external PostgreSQL
   - Run `npx prisma db push` after deployment

## 📝 Environment Variables

```env
DATABASE_URL=postgresql://username:password@host:port/database
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=production
```

## 🔧 Development

- **Local development:** `npm run dev`
- **Testing:** `npm test`
- **Database management:** `npx prisma studio`

## 📚 Documentation

For detailed API documentation and integration guides, see the individual README files in each folder.