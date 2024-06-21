import { FaHome } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { RiProfileFill } from 'react-icons/ri';

export const NavbarMenu = [
  {
    href: '/',
    title: 'Home',
    icon: <FaHome />,
  },
  {
    href: '/profile',
    title: 'Profile Kampung',
    icon: <RiProfileFill />,
  },
  {
    href: '/umkm',
    title: 'UMKM',
    icon: <FaShop />,
  },
];
