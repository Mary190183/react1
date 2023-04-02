import React from 'react';
import { FC } from 'react';

interface InputDateProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const FormDate: FC<InputDateProps> = (props) => {
  const { value, onChange } = props;
  return (
    <div className="input-box">
      <label htmlFor="date">
        <h5>Date</h5>
      </label>
      <input
        name="date"
        type="date"
        value={value}
        onChange={onChange}
        className="input-date"
        required
      />
    </div>
  );
};
