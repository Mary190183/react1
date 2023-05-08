import React from 'react';
import { FC } from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { DataFormCard } from '../../types/types';

interface InputCheckProps {
  checked: boolean | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  label: Path<DataFormCard>;
}

const FormCheckbox: FC<InputCheckProps> = (props) => {
  const { checked, onChange, register, label } = props;
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className="input-checkbox"
        data-testid="input-checkbox"
        checked={checked}
        {...register(label)}
        onChange={onChange}
      />
      <label htmlFor="checkbox">Degree of purity of waste</label>
    </div>
  );
};

export default FormCheckbox;
