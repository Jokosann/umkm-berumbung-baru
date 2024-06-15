'use client';

import { usePathname } from 'next/navigation';

const disableNavbar = ['/login', '/register'];

export default function Navbar() {
  const pathname = usePathname();

  console.log(pathname);

  return !disableNavbar.includes(pathname) && <div>Navbar</div>;
}
