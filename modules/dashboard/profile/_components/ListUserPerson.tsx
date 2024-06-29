import clsx from 'clsx';
import { ReactNode } from 'react';

type PropsTypes = {
  children: ReactNode;
  label: string;
  value?: string;
  height?: string;
};

export default function ListUserPerson({ children, label, value, height = 'h-16' }: PropsTypes) {
  return (
    <div className={`flex px-4 cursor-pointer hover:bg-slate-100 border-b border-b-black/10 ${height}`}>
      <div className="w-[80%] flex flex-col gap-1 items-start justify-center">
        <div className="w-full flex items-center justify-start">
          <p className="text-xs font-semibold text-slate-600">{label}</p>
        </div>
        <div className="w-full flex justify-start items-center">
          <p
            className={clsx('text-slate-600 text-[15px]', {
              'italic text-[13px] text-slate-400': !value,
            })}
          >
            {value ? value : 'click here for add user data'}
          </p>
        </div>
      </div>
      <div className="w-[20%] flex justify-end items-center">{children}</div>
    </div>
  );
}
