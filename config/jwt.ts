// JWT configuration
export const JWT_CONFIG = {
  // Secret key (should be in environment variables for production)
  secretKey: process.env.JWT_SECRET || 'your-secret-key-should-be-at-least-32-characters',
  
  // Token expiration time
  expiresIn: '1d', // 1 day
  
  // Cookie options
  cookie: {
    name: 'auth-token',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    maxAge: 60 * 60 * 24, // 1 day in seconds
    path: '/',
  },
  
  // JWT algorithm
  algorithm: 'HS512' // Use HS512 for better security than HS256
};