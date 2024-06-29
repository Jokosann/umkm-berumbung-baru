import * as React from 'react';

interface PropsTypes extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  classname?: string;
}

export default function LabelInput({ label, classname, ...props }: PropsTypes) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input {...props} className={'input input-bordered w-full placeholder:text-sm' + classname} />
    </label>
  );
}
