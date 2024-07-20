import type { Metadata } from 'next';
import './globals.css';
import { figtree } from '@/common/assets/font/font';
import Navbar from '@/components/layout/navbar';
import AuthProvider from '@/components/ui/AuthProvider';

export const metadata: Metadata = {
  title: 'UMKM - Berumbung Baru Dayun',
  description: 'website layanan UMKM masyarakat kampung Berumbung Baru',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body className={figtree.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
