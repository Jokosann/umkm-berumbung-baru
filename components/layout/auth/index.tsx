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
      <div className="text-3xl font-bold mb-4">{title}</div>
      <div className="max-w-lg p-6 w-full border boder-black rounded-md shadow-sm border-input">
        {children}
      </div>
      <div>
        <p className="text-base  mt-3">
          {linkText}
          <Link className="text-primary-color hover:underline" href={href}>
            disini
          </Link>
        </p>
      </div>
    </>
  );
}
