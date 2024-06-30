'use client';

import { User } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import ListUserPerson from './ListUserPerson';
import { IoIosArrowForward, IoMdCamera } from 'react-icons/io';
import { updateUserProfile } from '@/common/libs/firebase/services';
import { useState, useRef } from 'react';
import { useFormState } from 'react-dom';
import instance from '@/common/libs/axios/instance';

type PropsTypes = {
  user: User | null;
};

export default function Profile({ user }: PropsTypes) {
  const id = user?.id;
  // const [formState, formUpdateProfileAction] = useFormState(
  //   updateUserProfile.bind(null, id as string),
  //   null
  // );
  const [image, setImage] = useState(user?.image);
  const [imageMain, setImageMain] = useState(user?.image);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleChangeProfile = (e: any) => {
    const file = e.target?.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const formUpdateProfileAction = (e: any) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (file) {
      updateUserProfile(id as string, file, async (newImageUrl: string) => {
        const data = { image: newImageUrl, id };
        const result = await instance.post('/api/users/profile', JSON.stringify(data));
        if (result.status) {
          setImageMain(newImageUrl);
          return { message: 'true' };
        } else {
          return { message: 'false' };
        }
      });
    }
  };

  // console.log(formState);

  return (
    <>
      <div className="px-6 mt-20 sm:mt-24 md:mt-20">
        <div className="mx-auto mb-96">
          <div className="mt-40">
            <div className="pb-6 text-center -mt-14">
              <div className="relative z-30 mx-auto h-24 w-24 rounded-full bg-white/30 p-1 flex justify-center items-center">
                <div className="relative w-full h-full flex justify-center items-center rounded-full overflow-hidden cursor-pointer">
                  <Image
                    src={imageMain as string}
                    width={160}
                    height={160}
                    alt="profile"
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-2">
                <h3 className="text-2xl font-semibold text-black dark:text-white">{user?.name}</h3>
                <p className="text-sm text-black dark:text-white">{user?.email}</p>
              </div>

              <div className="max-w-3xl mx-auto mt-4 border border-black/10 shadow-sm rounded-lg overflow-hidden">
                <ListUserPerson
                  onClick={() => {
                    if (dialogRef.current) {
                      dialogRef.current.showModal();
                    }
                  }}
                  label="Profile Picture"
                  value="Lorem ipsum dolor sit amet."
                  height="h-20"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden cursor-pointer relative">
                    <Image
                      src={imageMain as string}
                      width={100}
                      height={100}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
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
                  href={'/dashboard/profile/update'}
                  className="btn mt-4 bg-primary-color hover:bg-primary-color/90 text-white"
                >
                  Update Data
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dialog ref={dialogRef} id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">Update Profile</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          <form
            onSubmit={formUpdateProfileAction}
            className="flex flex-col gap-2 justify-center items-center"
          >
            <div className="w-28 h-28 overflow-hidden rounded-full shadow-md">
              <Image
                src={image as string}
                alt="image"
                width={50}
                height={50}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full mt-4">
              <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
                <div className="space-y-1 text-center mt-2">
                  <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-600">
                    <a href="#" className="font-medium text-primary-500 hover:text-primary-700">
                      Click to upload
                    </a>{' '}
                    or drag and drop
                  </div>
                  <p className="text-sm text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
                <input
                  name="profile"
                  id="example5"
                  type="file"
                  onChange={handleChangeProfile}
                  className="sr-only"
                />
              </label>
            </div>
            <div className="w-full flex justify-end mt-4">
              <button type="submit" className="btn btn-neutral">
                update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
