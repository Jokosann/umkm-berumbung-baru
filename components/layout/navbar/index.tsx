'use client';

import { usePathname } from 'next/navigation';
import NavMain from '@/components/layout/navbar/_component/Navbar';

const disableNavbar = ['/dashboard/admin', '/auth/login'];

export default function Navbar() {
  const pathname = usePathname();
  return !disableNavbar.includes(pathname) && <NavMain />;
}
