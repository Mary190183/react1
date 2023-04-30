import React from 'react';
import { FC } from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { DataFormCard } from '../../types/types';

interface SelectTitleProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  label: Path<DataFormCard>;
}

const FormSelect: FC<SelectTitleProps> = (props) => {
  const { value, onChange, register, errors, label } = props;
  return (
    <div className="input-box">
      <label htmlFor="type">
        <h5>Type of waste: </h5>
      </label>
      <select
        id="type"
        value={value}
        {...register(label, {
          required: 'Enter a select',
        })}
        onChange={onChange}
      >
        <option></option>
        <option>Plastic</option>
        <option>Metal</option>
        <option>Paper</option>
        <option>Glass</option>
        <option>Unsort</option>
      </select>
      <div className="error">
        {errors?.select && <p>{`${errors.select.message}` || 'Error'}</p>}
      </div>
    </div>
  );
};

export default FormSelect;
