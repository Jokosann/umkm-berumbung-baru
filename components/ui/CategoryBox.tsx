import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type PropsTypes = {
  title: string;
  size: number | `${number}`;
  content: string | StaticImport;
  alt: string;
  classnameContent?: string;
  classnameText?: string;
};

export default function CategoryBox({
  title,
  size,
  content,
  alt,
  classnameContent,
  classnameText,
}: PropsTypes) {
  return (
    <div className="w-fit flex flex-col justify-center items-center cursor-pointer">
      <div className={`p-1 rounded-lg border border-slate-500/30 shadow-lg ${classnameContent}`}>
        <Image src={content} alt={alt} width={size} height={size} />
      </div>
      <span className={`font-semibold text-center text-xs mt-1 ${classnameText}`}>{title}</span>
    </div>
  );
}
