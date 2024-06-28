import { NEXT_AUTH_SECRET } from '@/common/constant/env';
import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server';

const adminPage = ['/dashboard/admin'];
const authPage = ['/login'];

export default function WithAuth(middleware: NextMiddleware, requireAuth: string[] = []) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    if (requireAuth.includes(pathname)) {
      const token = await getToken({ req, secret: NEXT_AUTH_SECRET });

      if (!token && !authPage.includes(pathname)) {
        const url = new URL('/login', req.url);
        url.searchParams.set('callbackUrl', encodeURI(req.url));
        return NextResponse.redirect(url);
      }
    }

    return middleware(req, next);
  };
}
