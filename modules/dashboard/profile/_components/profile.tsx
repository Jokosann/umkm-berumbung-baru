import { User } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import ListUserPerson from './ListUserPerson';
import { IoIosArrowForward, IoMdCamera } from 'react-icons/io';

type PropsTypes = {
  user: User | null;
};

export default function Profile({ user }: PropsTypes) {
  return (
    <div className="px-6 mt-20 sm:mt-24 md:mt-20">
      <div className="mx-auto mb-96">
        <div className="mt-40">
          <div className="pb-6 text-center -mt-14">
            <div className="relative z-30 mx-auto h-24 w-24 rounded-full bg-white/30 p-1 flex justify-center items-center">
              <div className="relative flex justify-center items-center rounded-full overflow-hidden cursor-pointer">
                <Image src={`${user?.image}`} width={160} height={160} alt="profile" />
              </div>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-semibold text-black dark:text-white">{user?.name}</h3>
              <p className="text-sm text-black dark:text-white">{user?.email}</p>
            </div>

            <div className="max-w-3xl mx-auto mt-4 border border-black/10 shadow-sm rounded-lg overflow-hidden">
              <ListUserPerson label="Profile Picture" value="Lorem ipsum dolor sit amet." height="h-20">
                <div className="w-14 h-14 rounded-full overflow-hidden cursor-pointer relative">
                  <Image src={`${user?.image}`} width={100} height={100} alt="profile" />
                  <div className="w-full h-5 absolute bottom-0 bg-black/50 flex justify-center items-center">
                    <IoMdCamera className="text-white" />
                  </div>
                </div>
              </ListUserPerson>
              <ListUserPerson label="Name" value={user?.name as string} height="h-[70px]">
                <IoIosArrowForward />
              </ListUserPerson>
              <ListUserPerson label="Email" value={user?.email as string} height="h-[70px]">
                <IoIosArrowForward />
              </ListUserPerson>
              <ListUserPerson label="Phone" height="h-[70px]">
                <IoIosArrowForward />
              </ListUserPerson>
              <ListUserPerson label="Address" height="h-[70px]">
                <IoIosArrowForward />
              </ListUserPerson>
            </div>
            <div className="max-w-3xl mx-auto flex justify-end">
              <Link
                href={`/dashboard/profile/${user?.id}`}
                className="btn mt-4 bg-primary-color hover:bg-primary-color/90 text-white"
              >
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
