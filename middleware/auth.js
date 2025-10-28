const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Security configuration
const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key-change-in-production';
const ALGORITHM = 'HS256';
const ACCESS_TOKEN_EXPIRE_MINUTES = 30;

// Password hashing functions
const verifyPassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

const getPasswordHash = async (password) => {
  return await bcrypt.hash(password, 12);
};

// JWT token functions
const createAccessToken = (data, expiresDelta = null) => {
  const toEncode = { ...data };
  const expire = expiresDelta 
    ? new Date(Date.now() + expiresDelta.getTime())
    : new Date(Date.now() + ACCESS_TOKEN_EXPIRE_MINUTES * 60 * 1000);
  
  toEncode.exp = Math.floor(expire.getTime() / 1000);
  return jwt.sign(toEncode, SECRET_KEY, { algorithm: ALGORITHM });
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, SECRET_KEY, { algorithms: [ALGORITHM] });
    const email = payload.sub;
    if (!email) {
      throw new Error('Invalid token payload');
    }
    return { email };
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

// Authentication middleware (required)
const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ error: 'Access token required' });
    }

    const decoded = verifyToken(token);
    
    // Verify user still exists and is active
    const user = await prisma.user.findUnique({
      where: { email: decoded.email },
      select: {
        id: true,
        email: true,
        fullName: true,
        phone: true,
        isActive: true,
        isAdmin: true
      }
    });

    if (!user || !user.isActive) {
      return res.status(401).json({ error: 'Invalid or inactive user' });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.message.includes('Invalid') || error.message.includes('expired')) {
      return res.status(401).json({ error: error.message });
    }
    console.error('Auth middleware error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Optional authentication middleware (not required)
const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      req.user = null;
      return next();
    }

    const decoded = verifyToken(token);
    
    const user = await prisma.user.findUnique({
      where: { email: decoded.email },
      select: {
        id: true,
        email: true,
        fullName: true,
        phone: true,
        isActive: true,
        isAdmin: true
      }
    });

    if (user && user.isActive) {
      req.user = user;
    } else {
      req.user = null;
    }

    next();
  } catch (error) {
    // If token is invalid, just continue without user
    req.user = null;
    next();
  }
};

module.exports = {
  verifyPassword,
  getPasswordHash,
  createAccessToken,
  verifyToken,
  authenticateToken,
  optionalAuth
};

