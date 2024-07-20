'use client';

import { useRouter } from 'next/navigation';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

export default function Routerback() {
  const router = useRouter();

  return (
    <div
      className="flex gap-1 items-center cursor-pointer my-2 mb-4 w-fit"
      onClick={() => router.back()}
    >
      <IoArrowBackCircleOutline className="text-xl" /> <span className="-mt-[1px]">kembali</span>
    </div>
  );
}
