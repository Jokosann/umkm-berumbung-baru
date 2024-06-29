import prisma from '@/common/libs/db/prisma';
import { getUserById } from '@/common/libs/db/services';
import ProfileModule from '@/modules/dashboard/profile';
import { getSession } from '@/services/session';

export default async function ProfileUserPage() {
  const session: any = await getSession();
  const userDb = await getUserById(session?.id);

  return <ProfileModule user={userDb} />;
}
