'use client';

// import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { FaUsers, FaUserCircle } from 'react-icons/fa';
// import { RiShoppingBag4Fill } from 'react-icons/ri';
import { HiHome } from 'react-icons/hi2';
import { AiFillShop } from 'react-icons/ai';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard/admin', icon: <HiHome /> },
  {
    name: 'Users',
    href: '/dashboard/admin/users',
    icon: <FaUsers />,
  },
  { name: 'Business', href: '/dashboard/admin/business', icon: <AiFillShop /> },
  { name: 'Account', href: '/dashboard/admin/account', icon: <FaUserCircle /> },
];

export default function NavLinks() {
  const path = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary-color/20 hover:text-primary-color lg:flex-none lg:justify-start lg:p-2 lg:px-3',
              {
                'bg-sky-100 text-primary-color': path === link.href,
              }
            )}
          >
            <div className="w-6 text-lg">{LinkIcon}</div>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
