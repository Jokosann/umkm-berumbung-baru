import { getBisnisByEmail, getUserById } from '@/common/libs/db/services';
import ProfileModule from '@/modules/dashboard/profile';
import { getSession } from '@/services/session';

export default async function ProfileUserPage() {
  const session: any = await getSession();
  const userDb = await getUserById(session?.id);
  const bisnisDb = await getBisnisByEmail(userDb.email);
  console.log(bisnisDb);

  return <ProfileModule user={userDb} bisnis={bisnisDb} />;
}
