import AccountUser from '@/modules/dashboard/admin/account/_components/AccountUser';
import { getSession } from '@/services/session';

export default async function AccountUserModule() {
  const user = await getSession();
  console.log(user);

  return <AccountUser user={user} />;
}
