'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  const query = useSearchParams();
  const callbackUrl = query.get('callbackUrl') || '/';

  return (
    <>
      <div className="w-full text-center text-3xl font-semibold">Login to you account</div>
      <div className="max-w-lg px-6 py-2 w-full mt-1 mb-2">
        <p className="text-sm mb-6 text-center text-slate-500">Login menggunakan akun google anda.</p>
        <button
          onClick={() => signIn('google', { callbackUrl, redirect: false })}
          type="button"
          className="btn w-full border border-primary-color/10 text-black"
        >
          <FcGoogle className="text-xl" /> Login with Google
        </button>
      </div>
      <div className="max-w-sm mx-auto">
        <p className="px-8 text-center text-sm mt-2">
          By clicking continue, you agree to our <span className="underline">Terms of Service</span> and{' '}
          <span className="underline">Privacy Policy</span>
        </p>
      </div>
    </>
  );
}
