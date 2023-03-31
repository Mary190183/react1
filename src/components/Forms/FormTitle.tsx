import { DetailedHTMLProps, FC, InputHTMLAttributes, useState } from 'react';

interface InputTitleProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  ref: React.LegacyRef<HTMLInputElement> | undefined;
}

const FormTitle: FC<InputTitleProps> = (props) => {
  const { value, onChange, ref } = props;
  return (
    <div className="input-box">
      <label htmlFor="title">
        <h5>Title </h5>
      </label>
      <input
        className="input-title"
        name="title"
        placeholder="Enter text ..."
        type="text"
        value={value}
        onChange={onChange}
        ref={ref}
        minLength={3}
        required
      ></input>
    </div>
  );
};

export default FormTitle;
