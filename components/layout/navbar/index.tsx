'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const disableNavbar = ['/dashboard/admin', '/auth/login'];

export default function NavbarModule() {
  const pathname = usePathname().split('/')[2];
  return !disableNavbar.includes(`/dashboard/${pathname}`) && <Navbar />;
}
