import { JWTPayload, jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { JWT_CONFIG } from '@/config/jwt';

// Use the secret key from the JWT_CONFIG
const secretKey = JWT_CONFIG.secretKey;
const key = new TextEncoder().encode(secretKey);

// Sign a new JWT token
export async function signToken(payload: JWTPayload, expiresIn = JWT_CONFIG.expiresIn) {  try {
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: JWT_CONFIG.algorithm })
      .setIssuedAt()
      .setExpirationTime(expiresIn)
      .sign(key);
    
    return token;
  } catch (error) {
    console.error('Token signing failed:', error);
    throw new Error('Failed to sign token');
  }
}

// Verify a JWT token
export async function verifyToken(token: string) {  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: [JWT_CONFIG.algorithm],
    });
    return payload;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

// Set a token in cookies
export function setTokenCookie(response: NextResponse, token: string) {
  response.cookies.set({
    name: JWT_CONFIG.cookie.name,
    value: token,
    httpOnly: JWT_CONFIG.cookie.httpOnly,
    secure: JWT_CONFIG.cookie.secure,
    sameSite: JWT_CONFIG.cookie.sameSite,
    maxAge: JWT_CONFIG.cookie.maxAge,
    path: JWT_CONFIG.cookie.path,
  });
  
  return response;
}

// Get the current user from the token in cookies
export async function getUser(req: NextRequest) {
  const token = req.cookies.get(JWT_CONFIG.cookie.name)?.value;
  
  if (!token) {
    return null;
  }
  
  const payload = await verifyToken(token);
  return payload;
}

// Server action to get the current user
export async function getCurrentUser() {
  const cookieStore = cookies();
  const token = (await cookieStore).get(JWT_CONFIG.cookie.name)?.value;
  
  if (!token) {
    return null;
  }
  
  const payload = await verifyToken(token);
  return payload;
}