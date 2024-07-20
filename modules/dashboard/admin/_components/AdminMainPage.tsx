'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

export default function AdminMainPage() {
  const { data }: any = useSession();
  const router = useRouter();

  const handleClick = () => {
    if (data?.user.isAdmin) {
      router.push('/dashboard/admin');
    } else {
      alert('Anda Bukan Admin');
    }
  };

  return (
    <div className="w-fit space-y-2">
      <h1 className="font-semibold text-xl">Halaman ini khusus admin!!!</h1>
      <div className="text-xs">
        <p>- kembali jika anda bukan admin</p>
        <p>- Lanjut jika anda admin</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => router.back()} className="btn">
          <FaLongArrowAltLeft />
          Kembali
        </button>
        <button onClick={handleClick} className="btn">
          Lanjut ke dashboard
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}
