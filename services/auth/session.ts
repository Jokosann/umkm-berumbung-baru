import { getServerSession } from 'next-auth';
import { authOptions } from '@/services/auth/auth-options';

export async function getSession() {
  const session = await getServerSession(authOptions);
  return session?.user;
}
