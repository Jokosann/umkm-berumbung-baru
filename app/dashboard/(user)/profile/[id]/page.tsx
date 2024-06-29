import prisma from '@/common/libs/db/prisma';
import { getUserById } from '@/common/libs/db/services';
import FormUpdateProfile from '@/modules/dashboard/profile/_components/FormUpdateProfile';

export default async function UpdateProfilesPage({ params }: { params: { id: string } }) {
  const userDb = await getUserById(params.id);

  return (
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:flex-row text-primary-color">
      <main className="max-w-3xl w-full min-h-screen py-1 pt-12 mx-auto">
        <h2 className="text-xl font-bold mt-10">Update Profile User</h2>
        <FormUpdateProfile user={userDb} />
      </main>
    </div>
  );
}
