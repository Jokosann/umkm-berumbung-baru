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
  const [bgNav, setBgNav] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActiveMenu(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;

      if (scrollY > 0) {
        setBgNav(true);
      } else {
        setBgNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-8 py-3 md:py-2 flex justify-between items-center bg-primary-color transition duration-300',
        {
          'md:bg-transparent': !bgNav && pathname === '/',
        }
      )}
    >
      <div className="flex gap-4">
        <Image src={Img.Logo} alt="logo" width={50} height={50} className="w-8 sm:w-10" priority />
        <Link href={'/'} className="flex flex-col justify-center items-start text-white">
          <p className="font-[800] text-sm sm:text-sm">LAYANAN UMKM</p>
          <p className="text-xs sm:text-sm font-medium">kampung Berumbung Baru</p>
        </Link>
      </div>
      <div
        onClick={() => setIsActiveMenu(false)}
        className={clsx({
          'fixed top-[68px] sm:top-[79px] right-0 left-0 bottom-0 bg-transparent backdrop-blur-sm z-30':
            isActiveMenu,
        })}
      />
      <div
        className={clsx(
          'md:text-white font-bold md:shadow-none md:p-0 md:w-auto md:h-auto md:flex-row md:bg-transparent md:flex md:justify-between md:items-center md:gap-8 lg:gap-14 text-sm lg:text-base md:static fixed z-50 top-[68px] sm:top-[79px] -right-[80vw] bg-white h-full text-primary-color flex flex-col items-start gap-6 w-[80vw] py-5 px-4 shadow-md transition-all duration-300',
          {
            'right-0': isActiveMenu,
          }
        )}
      >
        <div className="md:text-white md:w-auto md:h-auto md:flex-row md:flex md:gap-6 text-primary-color flex flex-col items-start gap-7">
          {NavbarLinkData.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={clsx('hover:underline hover:underline-offset-8 hover:decoration-1', {
                'underline underline-offset-8 decoration-1': pathname === link.href,
              })}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <Button
          type="button"
          className={clsx(
            'text-white hover:bg-white hover:text-primary-color font-bold text-xs border border-white',
            {
              'md:bg-white md:text-primary-color hover:bg-primary-color hover:text-white': !bgNav,
            }
          )}
        >
          DAFTAR UMKM
        </Button>
      </div>

      <div
        onClick={() => setIsActiveMenu(!isActiveMenu)}
        className={clsx('tham tham-e-squeeze tham-w-7 sm:tham-w-8 md:hidden', {
          'tham-active': isActiveMenu,
        })}
      >
        <div className="tham-box">
          <div className="tham-inner bg-white" />
        </div>
      </div>
    </div>
  );
}
