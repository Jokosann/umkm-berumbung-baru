import * as React from 'react';

interface PropsTypes extends React.HTMLProps<HTMLSelectElement> {
  label?: string;
  classname?: string;
  optionsTitle: string;
  valueOptions: string[];
}

export default function LabelSelect({
  classname,
  label,
  optionsTitle,
  valueOptions,
  ...props
}: PropsTypes) {
  return (
    <label className={'form-control max-w-xs' + classname}>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select {...props} className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          {optionsTitle}
        </option>
        {valueOptions.map((v: string) => (
          <option key={v}>{v}</option>
        ))}
      </select>
    </label>
  );
}
