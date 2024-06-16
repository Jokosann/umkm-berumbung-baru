import AuthLayout from '@/components/layout/auth';
import Login from '@/modules/login';

export default function LoginPage() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-2">
      <AuthLayout href="/register" title="Login" linkText="Belom memiliki akun? Daftar ">
        <Login />
      </AuthLayout>
    </section>
  );
}
