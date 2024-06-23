'use client';

import { MdEmail } from 'react-icons/md';
import { FaUser, FaLock } from 'react-icons/fa';
import { IoEyeOff, IoEye } from 'react-icons/io5';
import { useState } from 'react';

export default function Register() {
  const [isEye, setIsEye] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <label className="input input-bordered flex items-center gap-2">
        <FaUser />
        <input type="email" className="grow placeholder:text-sm" placeholder="John Dee" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <MdEmail />
        <input type="text" className="grow placeholder:text-sm" placeholder="John123@gmail.com" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <FaLock />
        <input
          type={isEye ? 'text' : 'password'}
          className="grow placeholder:text-sm"
          placeholder="Password123"
        />
        <div className="cursor-pointer" onClick={() => setIsEye(!isEye)}>
          {!isEye ? <IoEyeOff className="w-5 h-5" /> : <IoEye className="w-5 h-5" />}
        </div>
      </label>

      <button className="btn bg-primary-color border border-white text-white hover:bg-primary-color/90 hover:border-white">
        Daftar Akun
      </button>
    </div>
  );
}
