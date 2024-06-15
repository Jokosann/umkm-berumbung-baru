'use client';

import { NavbarLinkData } from '@/common/data/nav-link';
import Img from '@/common/libs/image/image';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavMain() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-[#006643] px-6 py-4 flex justify-between items-center">
      <div className="flex gap-4">
        <Image src={Img.Logo} alt="logo" width={50} height={50} />
        <div className="flex flex-col justify-center items-start text-white">
          <p className="font-bold text-xl">Search UMKM</p>
          <p className="font-medium text-lg">Kampung Berumbung Baru</p>
        </div>
      </div>
      <div className="text-white font-bold flex gap-4">
        {NavbarLinkData.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`${
              pathname === link.href ? 'underline underline-offset-8 decoration-2' : ''
            } hover:underline hover:underline-offset-8 hover:decoration-2`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <Button type="button" variant="primary" classname="text-sm font-bold rounded-sm shadow-sm">
        Daftar UMKM
      </Button>
    </div>
  );
}
