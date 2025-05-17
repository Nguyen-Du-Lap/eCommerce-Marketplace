import { NextRequest, NextResponse } from 'next/server';

// Define paths that don't require authentication
const publicPaths = [
  '/',
  '/login',
  '/register',
  '/forget-password',
  '/api/public',
  '/products',
];

// Checks if a path should be public or protected
const isPublicPath = (path: string) => {
  return publicPaths.some(publicPath => 
    path === publicPath || 
    path.startsWith(`${publicPath}/`) ||
    path.includes('/images/') ||
    path.endsWith('.svg') ||
    path.endsWith('.png') ||
    path.endsWith('.jpg') ||
    path.endsWith('.jpeg') ||
    path.endsWith('.ico')
  );
};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  const token = request.cookies.get('auth-token')?.value;
  
  const isPublic = isPublicPath(path);
  const hasToken = !!token;

  // Redirect unauthenticated users to login
  if (!isPublic && !hasToken) {
    const url = new URL('/login', request.url);
    url.searchParams.set('callbackUrl', encodeURI(request.url));
    
    return NextResponse.redirect(url);
  }

  if (hasToken && (path === '/login' || path === '/register')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Define routes that will trigger the middleware
export const config = {
  // Skip API routes that handle their own authentication
  matcher: ['/((?!api/auth|_next/static|_next/image|favicon.ico).*)'],
};
