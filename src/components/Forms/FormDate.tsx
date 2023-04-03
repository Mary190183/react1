import React, { ReactNode } from 'react';
import { FC } from 'react';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';
import { DataFormCard } from '../../types/types';

interface InputDateProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  label: Path<DataFormCard>;
}

export const FormDate: FC<InputDateProps> = (props) => {
  const { value, onChange, register, errors, label } = props;
  return (
    <div className="input-box">
      <label htmlFor="date">
        <h5>Date</h5>
      </label>
      <input
        type="date"
        value={value}
        {...register(label, {
          required: 'Enter a date',
          maxLength: {
            value: 10,
            message: 'Max value must be less 10',
          },
        })}
        onChange={onChange}
        className="input-date"
      />
      <div className="error">{errors?.date && <p>{`${errors.date.message}` || 'Error'}</p>}</div>
    </div>
  );
};
