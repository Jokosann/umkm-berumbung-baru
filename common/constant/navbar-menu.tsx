import { FaHome } from 'react-icons/fa';
import { AiFillShop } from 'react-icons/ai';
import { TbLayoutDashboardFilled } from 'react-icons/tb';

export const NavbarMenu = [
  {
    href: '/',
    title: 'home',
    icon: <FaHome />,
  },
  {
    href: '/umkm',
    title: 'umkm',
    icon: <AiFillShop />,
  },
  {
    href: '/dashboard',
    title: 'dashboard',
    icon: <TbLayoutDashboardFilled />,
  },
];
