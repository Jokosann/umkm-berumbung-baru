import WithAuth from '@/common/libs/middleware/with-auth';
import { NextResponse } from 'next/server';

export function mainMiddleware() {
  return NextResponse.next();
}

export default WithAuth(mainMiddleware, [
  '/dashboard/admin',
  '/dashboard/admin/business/new',
  '/dashboard/admin/business',
  '/dashboard/admin/users',
  '/auth/login',
]);
