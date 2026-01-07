import React from 'react';
import { FC } from 'react';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';
import { DataFormCard } from '../../types/types';

interface InputTitleProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  label: Path<DataFormCard>;
}

const FormTitle: FC<InputTitleProps> = (props) => {
  const { value, onChange, register, errors, label } = props;
  return (
    <div className="input-box" data-testid="title">
      <label htmlFor="title">
        <h5>Title </h5>
      </label>
      <input
        className="input-title"
        placeholder="Enter text ..."
        type="text"
        value={value}
        {...register(label, {
          required: 'Enter a title',
          minLength: {
            value: 2,
            message: 'Min length must be more 2',
          },
        })}
        onChange={onChange}
      ></input>
      <div className="error">{errors?.title && <p>{`${errors.title.message}` || 'Error'}</p>}</div>
    </div>
  );
};

export default FormTitle;
