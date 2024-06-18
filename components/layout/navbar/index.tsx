'use client';

import { usePathname } from 'next/navigation';
import NavMain from '@/components/layout/navbar/_component/Navbar';

const disableNavbar = ['/admin', '/login', '/register'];

export default function Navbar() {
  const pathname = usePathname();
  return !disableNavbar.includes(pathname) && <NavMain />;
}
