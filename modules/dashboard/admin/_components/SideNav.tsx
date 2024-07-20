'use client';

import Link from 'next/link';
import NavLinks from './NavLink';
import Image from 'next/image';
import { Logo } from '@/common/assets/image';

import { FaSignOutAlt } from 'react-icons/fa';
import { signOut, useSession } from 'next-auth/react';

export default function SideNav() {
  const { data } = useSession();

  return (
    <div className="flex h-full flex-col px-3 py-4 lg:px-2">
      <Link className="mb-2 rounded-md bg-primary-color p-4" href="/">
        <div className="flex gap-4 leading-none text-white">
          <Image src={Logo} alt="logo" width={50} height={50} className="w-8 sm:w-10" priority />
          <div className="flex flex-col justify-center items-start text-white">
            <p className="font-[800] text-sm sm:text-sm">LAYANAN UMKM</p>
            <p className="text-xs sm:text-sm font-medium">kampung Berumbung Baru</p>
          </div>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 lg:block"></div>
        <div>
          <button
            onClick={() => signOut()}
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary-color/20 hover:text-primary-color lg:flex-none lg:justify-start lg:p-2 lg:px-3"
          >
            <FaSignOutAlt className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </div>
      </div>
    </div>
  );
}
