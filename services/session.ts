import { getServerSession } from 'next-auth';
import { authOptions } from '@/common/libs/db/auth-options';

export async function getSession() {
  const session = await getServerSession(authOptions);
  return session?.user;
}
