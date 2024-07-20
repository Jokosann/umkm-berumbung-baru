'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { NavbarMenu } from '@/common/constant/navbar-menu';
import { Logo } from '@/common/assets/image';

import clsx from 'clsx';

export default function Navbar() {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-8 py-3 md:py-2 flex justify-between items-center bg-primary-color transition',
        {
          'md:bg-transparent': !bgNav && pathname === '/',
        }
      )}
    >
      <div className="flex gap-3">
        <Image src={Logo} alt="logo" width={50} height={50} className="w-8 sm:w-10" priority />
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
          'md:text-white font-bold md:shadow-none md:p-0 md:w-auto md:h-full md:flex-row md:bg-transparent md:flex md:justify-between md:items-center md:gap-6 text-sm md:static fixed z-50 top-[68px] sm:top-[79px] -right-[80vw] bg-white h-full text-primary-color flex flex-col items-start gap-6 w-[80vw] sm:w-[50vw] py-5 px-4 shadow-md transition-all duration-300',
          {
            'right-0': isActiveMenu,
          }
        )}
      >
        <div className="text-primary-color w-full h-full flex justify-center items-center md:w-auto md:h-auto">
          <div className="flex flex-col items-start justify-center gap-7 -mt-[68px] sm:-mt-[79px] md:mt-0 md:text-white md:w-auto md:h-auto md:flex-row md:flex md:gap-6">
            {NavbarMenu.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={clsx(
                  'hover:underline hover:underline-offset-8 hover:decoration-1 flex gap-2 items-center',
                  {
                    'underline underline-offset-8 decoration-1': pathname === link.href,
                  }
                )}
              >
                <span>{link.icon}</span>
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* {status === 'authenticated' ? (
          <details className="dropdown md:dropdown-end">
            <summary className="btn bg-primary-color lg:bg-primary-color md:border-2 md:border-white/60 text-white lg:text-white  hover:bg-primary-color/80 hover:border-white text-xs btn-sm h-10 uppercase">
              {user?.name}
            </summary>
            <ul className="dropdown-content menu bg-base-100 rounded-lg mt-1 z-[1] w-40 p-2 shadow-sm text-primary-color font-bold border-2 border-primary-color/10">
              <li>
                <Link href={'/dashboard/profile'} className="flex items-center">
                  <CgProfile className="font-bold text-lg" /> <span>Acount</span>{' '}
                </Link>
              </li>
              <li>
                <button onClick={() => signOut()} className="flex items-center text-red-600">
                  <IoIosLogOut className="font-bold text-lg" /> <span>Logout</span>
                </button>
              </li>
            </ul>
          </details>
        ) : (
          <button className="btn bg-primary-color lg:bg-primary-color border border-white text-white lg:text-white  hover:bg-primary-color/60 hover:border-white text-xs btn-sm h-10">
            DAFTAR UMKM
          </button>
        )} */}
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
