import AuthLayout from '@/components/layout/auth';
import LoginModule from '@/modules/login';

export default function LoginPage() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-2">
      <AuthLayout
        href="/register"
        title="Login to you account"
        linkText="Belom memiliki akun? daftar "
        inputTitle="*Masukkan email dan password anda."
      >
        <LoginModule />
      </AuthLayout>
    </section>
  );
}
