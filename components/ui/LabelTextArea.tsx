import * as React from 'react';

interface PropsTypes extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
  classname?: string;
}

export default function LabelTextArea({ label, classname, ...props }: PropsTypes) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <textarea
        {...props}
        className={'textarea textarea-bordered h-24 text-base placeholder:text-base' + classname}
      />
    </label>
  );
}
