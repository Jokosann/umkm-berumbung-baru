'use client';

import { SessionProvider } from 'next-auth/react';

type PropsTypes = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: PropsTypes) {
  return <SessionProvider>{children}</SessionProvider>;
}
