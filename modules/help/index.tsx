'use client';

import { signOut } from 'next-auth/react';

export default function HelpModule() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <button onClick={() => signOut()} className="btn">
        SignOut
      </button>
    </div>
  );
}
