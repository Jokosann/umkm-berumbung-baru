import WithAuth from '@/common/libs/middleware/with-auth';
import { NextResponse } from 'next/server';

export function mainMiddleware() {
  return NextResponse.next();
}

export default WithAuth(mainMiddleware, [
  '/dashboard/profile',
  '/dashboard/admin',
  '/dashboard/profile/update',
  '/auth/login',
]);
