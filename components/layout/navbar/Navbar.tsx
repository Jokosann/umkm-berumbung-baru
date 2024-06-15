'use client';

import { usePathname } from 'next/navigation';
import NavMain from '@/components/layout/navbar/NavMain';

const disableNavbar = ['/admin', '/login', '/register'];

export default function Navbar() {
  const pathname = usePathname();
  return !disableNavbar.includes(pathname) && <NavMain />;
}
