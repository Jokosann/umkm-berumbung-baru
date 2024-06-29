import { NEXT_AUTH_SECRET } from '@/common/constant/env';
import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server';

const adminPage = ['/dashboard/admin'];
const authPage = ['/auth/login'];

export default function WithAuth(middleware: NextMiddleware, requireAuth: string[] = []) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    if (requireAuth.includes(pathname)) {
      try {
        const token = await getToken({ req, secret: NEXT_AUTH_SECRET });

        if (!token && !authPage.includes(pathname)) {
          const url = new URL('/auth/login', req.url);
          url.searchParams.set('callbackUrl', encodeURI(req.url));
          return NextResponse.redirect(url.toString());
        }

        if (token) {
          if (authPage.includes(pathname)) {
            return NextResponse.redirect(new URL('/', req.url).toString());
          }

          if (!token.is_admin && adminPage.includes(pathname)) {
            return NextResponse.redirect(new URL('/', req.url).toString());
          }
        }
      } catch (error) {
        console.error('Error retrieving token:', error);
        // Handle error retrieving token, possibly redirect to error page
        return NextResponse.redirect(new URL('/error', req.url).toString());
      }
    }

    // Continue with other middleware if no redirection occurred
    return middleware(req, next);
  };
}
