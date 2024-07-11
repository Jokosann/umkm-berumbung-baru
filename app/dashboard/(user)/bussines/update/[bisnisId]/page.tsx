import { getBisnisByEmailUniq } from '@/common/libs/db/services';
import FormUpdateBisnis from '@/modules/dashboard/bussines/_components/FormUpdateBisnis';

export default async function UpdateProfilesPage({ params }: { params: { bisnisId: string } }) {
  console.log(params);

  const bisnis = await getBisnisByEmailUniq(params.bisnisId);
  console.log(bisnis);

  return (
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:flex-row text-primary-color">
      <main className="max-w-3xl w-full min-h-screen py-1 pt-12 mx-auto">
        <h2 className="text-xl font-bold mt-10">Update Bisnis</h2>
        <FormUpdateBisnis bisnis={bisnis} />
      </main>
    </div>
  );
}
