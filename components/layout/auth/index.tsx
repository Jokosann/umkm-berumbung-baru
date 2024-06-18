import Link from 'next/link';

type PropsTypes = {
  title: string;
  children: React.ReactNode;
  linkText: string;
  href: string;
};

export default function AuthLayout({ title, children, linkText, href }: PropsTypes) {
  return (
    <>
      <div className="w-full text-center text-3xl font-semibold mb-1">{title}</div>
      <div className="max-w-lg px-6 py-2 w-full my-2">
        <p className="text-sm text-muted-foreground mb-1">*masukkan username dan password.</p>
        {children}
      </div>
      <p className="text-sm mt-3 mb-4">
        {linkText}
        <Link className="text-primary-color hover:underline font-medium" href={href}>
          👉disini
        </Link>
      </p>
      <div className="max-w-sm mx-auto">
        <p className="px-8 text-center text-sm text-muted-foreground mt-2">
          By clicking continue, you agree to our <span className="underline">Terms of Service</span> and{' '}
          <span className="underline">Privacy Policy</span>
        </p>
      </div>
    </>
  );
}
