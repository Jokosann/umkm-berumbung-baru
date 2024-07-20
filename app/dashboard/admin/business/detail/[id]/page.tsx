import { getBusinesById } from '@/common/libs/db/services';
import DetailBusines from '@/modules/dashboard/admin/business/_components/DetailBusines';

export default async function page({ params }: { params: { id: string } }) {
  const busines = await getBusinesById(params.id);
  return <DetailBusines busines={busines} />;
}
