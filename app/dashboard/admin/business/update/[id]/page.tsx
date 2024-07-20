import { getBusinesById } from '@/common/libs/db/services';
import UpdateBusines from '@/modules/dashboard/admin/business/_components/UpdateBusines';

export default async function page({ params }: { params: { id: string } }) {
  const busines = await getBusinesById(params.id);
  return <UpdateBusines busines={busines} />;
}
