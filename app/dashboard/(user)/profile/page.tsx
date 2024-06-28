import { BgHome } from '@/common/assets/image';
import ListUserPerson from '@/modules/profile/_components/ListUserPerson';
import { getSession } from '@/services/session';
import Image from 'next/image';
import { IoIosArrowForward, IoMdCamera } from 'react-icons/io';

export default async function ProfileUserPage() {
  const session = await getSession();

  return (
    <div className="px-6 mt-20 sm:mt-24 md:mt-20">
      <div className="mx-auto mb-96">
        <div className="mt-40">
          {/* <div className="relative z-20 h-44 md:h-72">
            <Image
              src={BgHome}
              alt="profile cover"
              className="h-full rounded-lg object-cover object-center"
              width={2000}
              height={260}
            />
            <div className="absolute inset-0 bg-black/60 rounded-lg" />
          </div> */}
          <div className="pb-6 text-center -mt-14">
            <div className="relative z-30 mx-auto h-24 w-24 rounded-full bg-white/30 p-1 flex justify-center items-center">
              <div className="relative flex justify-center items-center rounded-full overflow-hidden cursor-pointer">
                <Image src={`${session?.image}`} width={160} height={160} alt="profile" />
              </div>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-semibold text-black dark:text-white">{session?.name}</h3>
              <p className="text-sm text-black dark:text-white">{session?.email}</p>
            </div>

            <div className="max-w-3xl mx-auto mt-4 border border-black/10 shadow-sm rounded-lg overflow-hidden">
              <ListUserPerson label="Profile Picture" value="Lorem ipsum dolor sit amet." height="h-20">
                <div className="w-14 h-14 rounded-full overflow-hidden cursor-pointer relative">
                  <Image src={`${session?.image}`} width={100} height={100} alt="profile" />
                  <div className="w-full h-5 absolute bottom-0 bg-black/50 flex justify-center items-center">
                    <IoMdCamera className="text-white" />
                  </div>
                </div>
              </ListUserPerson>
              <ListUserPerson label="Name" value={session?.name as string}>
                <IoIosArrowForward />
              </ListUserPerson>
              <ListUserPerson label="Email" value={session?.email as string}>
                <IoIosArrowForward />
              </ListUserPerson>
              <ListUserPerson label="Phone">
                <IoIosArrowForward />
              </ListUserPerson>
              <ListUserPerson label="Address">
                <IoIosArrowForward />
              </ListUserPerson>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
