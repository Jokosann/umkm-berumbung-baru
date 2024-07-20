'use client';

import Image from 'next/image';
import Routerback from '@/components/ui/Routerback';
// import ListUserPerson from '@/modules/dashboard/profile/_components/ListUserPerson';

export default function AccountUser({ user }: { user: any }) {
  console.log(user);

  return (
    <>
      <Routerback />
      <div className="pb-2">
        <div className="relative z-30 mx-auto h-24 w-24 rounded-full bg-white/30 p-1 flex justify-center items-center">
          <div className="relative w-full h-full flex justify-center items-center rounded-full overflow-hidden cursor-pointer">
            <Image
              src={user?.image as string}
              width={160}
              height={160}
              alt="profile"
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-2 text-center">
          <h3 className="text-2xl font-semibold text-black dark:text-white">{user?.email}</h3>
          <p className="text-sm text-black dark:text-white">{user?.name}</p>
        </div>

        {/* <div className="w-full mx-auto mt-4 border border-black/10 shadow-sm rounded-lg overflow-hidden">
          <ListUserPerson label="Profile Picture" value="Lorem ipsum dolor sit amet." height="h-20">
            <div className="w-14 h-14 rounded-full overflow-hidden cursor-pointer relative">
              <Image
                src={user?.image as string}
                width={100}
                height={100}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </ListUserPerson>

          <ListUserPerson label="ID" height="h-[70px]" value={user?.id as string} />
          <ListUserPerson label="Nama" height="h-[70px]" value={user?.name as string} />
          <ListUserPerson label="Email" height="h-[70px]" value={user?.email as string} />
          <ListUserPerson label="Role" height="h-[70px]" value={user?.isAdmin ? 'Admin' : 'Member'} />
        </div> */}
      </div>
    </>
  );
}
