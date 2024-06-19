import AuthLayout from '@/components/layout/auth';

export default function RegisterPage() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-2">
      <AuthLayout href="/login" title="Create an account" linkText="Sudah memiliki akun? Login ">
        <p>register</p>
      </AuthLayout>
    </section>
  );
}
