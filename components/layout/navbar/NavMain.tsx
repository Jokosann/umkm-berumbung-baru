'use client';

import { NavbarLinkData } from '@/common/data/nav-link';
import Img from '@/common/libs/image/image';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/shadcn/ui/button';
import clsx from 'clsx';

export default function NavMain() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActiveMenu(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-primary-color px-6 py-3 sm:py-4 flex justify-between items-center">
      <div className="flex gap-4">
        <Image src={Img.Logo} alt="logo" width={50} height={50} className="w-8 sm:w-12 lg:w-14" />
        <Link href={'/'} className="flex flex-col justify-center items-start text-white">
          <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">Kampung Berumbung Baru</p>
          <p className="text-xs sm:text-sm lg:text-base">Kabupaten Siak</p>
        </Link>
      </div>
      <div
        onClick={() => setIsActiveMenu(false)}
        className={clsx({
          'fixed top-[68px] sm:top-[98px] right-0 left-0 bottom-0 bg-transparent backdrop-blur-sm z-30':
            isActiveMenu,
        })}
      />
      <div
        className={clsx(
          'md:text-white font-bold md:shadow-none md:p-0 md:w-auto md:h-auto md:flex-row md:bg-transparent md:flex md:justify-between md:items-center md:gap-8 text-sm lg:text-base md:static fixed z-50 top-[68px] sm:top-[98px] right-0 bg-white h-full text-primary-color flex flex-col items-start gap-6 w-[80vw] py-5 px-4 shadow-md transition-all duration-300',
          {
            '-right-[80vw]': !isActiveMenu,
          }
        )}
      >
        <div className="md:text-white md:w-auto md:h-auto md:flex-row md:flex md:gap-4 text-primary-color flex flex-col items-start gap-6">
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
        <Button className="text-white bg-primary-color hover:bg-white hover:text-primary-color font-semibold border border-white">
          Login
        </Button>
      </div>
      <div
        onClick={() => setIsActiveMenu(!isActiveMenu)}
        className={clsx('w-7 h-5 flex flex-col justify-between cursor-pointer md:hidden', {
          'hamberger-active': isActiveMenu,
        })}
      >
        <div className="w-full h-[3px] bg-white rounded-lg"></div>
        <div className="w-full h-[3px] bg-white rounded-lg"></div>
        <div className="w-full h-[3px] bg-white rounded-lg"></div>
      </div>
    </div>
  );
}
