import LoginModule from '@/modules/login';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-2">
      <Suspense fallback={'loading...'}>
        <LoginModule />
      </Suspense>
    </section>
  );
}
