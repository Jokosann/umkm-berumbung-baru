import type { Metadata } from 'next';
import './globals.css';
import { dmSans } from '@/common/assets/font/font';
import Navbar from '@/components/layout/navbar';
import AuthProvider from '@/services/auth/auth-provider';

export const metadata: Metadata = {
  title: 'UMKM - Berumbung Baru Dayun',
  description: 'website layanan UMKM masyarakat kampung Berumbung Baru',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <body className={dmSans.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
