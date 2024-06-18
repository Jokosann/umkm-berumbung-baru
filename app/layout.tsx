import type { Metadata } from 'next';
import './globals.css';
import { outfit } from '@/common/libs/font/font';
import Navbar from '@/components/layout/navbar';
import { Toaster } from '@/components/shadcn/ui/toaster';

export const metadata: Metadata = {
  title: 'UMKM - Berumbung Baru Dayun',
  description: 'website layanan UMKM masyarakat kampung Berumbung Baru',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
