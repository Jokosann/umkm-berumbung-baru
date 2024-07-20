import { getAllBisnis } from '@/common/libs/db/services';
import { Business } from '@prisma/client';
import DashboardBusiness from './_components/DashboardBusiness';

export default async function DashboardBusinessModule() {
  const bisniss: Business[] = await getAllBisnis();
  return <DashboardBusiness business={bisniss} />;
}
