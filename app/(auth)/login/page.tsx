import AuthLayout from '@/components/layout/auth';
import Login from '@/modules/login/index';

export default function LoginPage() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-2">
      <AuthLayout href="/register" title="Login to you account" linkText="Belom memiliki akun? daftar ">
        <Login />
      </AuthLayout>
    </section>
  );
}
