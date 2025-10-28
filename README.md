# GCH Backend API - Minimal Version

This is a minimal version of the GCH backend API for troubleshooting deployment issues.

## 🚀 Quick Test Endpoints

- `GET /` - Basic API info
- `GET /health` - Health check
- `GET /test` - Test endpoint
- `POST /api/auth/test` - Auth test (no database)
- `POST /api/forms/test` - Forms test (no database)

## 🔧 Troubleshooting Steps

1. **Check if API is running**: Visit `/` endpoint
2. **Test basic functionality**: Try `/test` endpoint
3. **Test POST requests**: Try `/api/auth/test` with JSON body
4. **Check Vercel logs**: Look for deployment errors
5. **Verify environment**: Check if Node.js version is compatible

## 📝 Test Commands

```bash
# Test GET endpoint
curl https://your-vercel-url.vercel.app/

# Test POST endpoint
curl -X POST https://your-vercel-url.vercel.app/api/auth/test \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

## 🐛 Common Issues

- **404 errors**: Check Vercel routing configuration
- **500 errors**: Check Node.js version compatibility
- **CORS errors**: Verify origin settings
- **Timeout errors**: Check function duration limits

## 📋 Next Steps

Once basic endpoints work:
1. Add database connection
2. Add authentication
3. Add form submission
4. Add error handling
5. Add validation