import { User } from '@prisma/client';
import DashboardUsers from './_components/DashboardUsers';
import { getAllUsers } from '@/common/libs/db/services';

export default async function DashboardUsersModule() {
  const users: User[] = await getAllUsers();
  return <DashboardUsers users={users} />;
}
