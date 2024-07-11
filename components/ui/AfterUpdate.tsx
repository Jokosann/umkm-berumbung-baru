import Link from 'next/link';

type PropsTypes = {
  href: string;
};

export default function AfterUpdate({ href }: PropsTypes) {
  return (
    <div className="w-full min-h-screen flex flex-col gap-3 justify-center items-center">
      <p> Anda Sudah Membuat Bisnis</p>
      <Link href={href} className="btn">
        kembali
      </Link>
    </div>
  );
}
