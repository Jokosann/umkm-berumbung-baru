import { getBisnisByEmail, getBisnisByEmailUniq, getUserById } from '@/common/libs/db/services';
import AfterUpdate from '@/components/ui/AfterUpdate';
import BussinesModule from '@/modules/dashboard/bussines';
import { getSession } from '@/services/session';

export default async function BussinesPage() {
  const session: any = await getSession();
  const user = await getUserById(session?.id);
  const bisnis = await getBisnisByEmail(user.email);
  console.log(bisnis);

  if (bisnis.length > 0) return <AfterUpdate href="/dashboard/profile" />;

  return <BussinesModule user={user} />;
}
