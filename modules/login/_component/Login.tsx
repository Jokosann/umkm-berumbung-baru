'use client';

import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { IoEyeOff, IoEye } from 'react-icons/io5';
import { useState } from 'react';

export default function Login() {
  const [isEye, setIsEye] = useState(false);

  return (
    <form className="flex flex-col gap-4">
      <label className="input input-bordered flex items-center gap-2">
        <MdEmail />
        <input type="text" className="grow placeholder:text-sm" placeholder="Email" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <FaLock />
        <input
          type={isEye ? 'text' : 'password'}
          className="grow placeholder:text-sm"
          placeholder="Password"
        />
        <div className="cursor-pointer" onClick={() => setIsEye(!isEye)}>
          {!isEye ? <IoEyeOff className="w-5 h-5" /> : <IoEye className="w-5 h-5" />}
        </div>
      </label>

      <button
        type="submit"
        className="btn bg-primary-color border border-white text-white hover:bg-primary-color/90 hover:border-white"
      >
        Login
      </button>
    </form>
  );
}
