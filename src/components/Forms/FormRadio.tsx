import React, { FC } from 'react';
import { DataFormCard, DataRadio } from '../../types/types';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';

interface InputTitleProps extends DataRadio {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  label: Path<DataFormCard>;
}

const FormRadio: FC<InputTitleProps> = (props) => {
  const { value, onChange, register, label } = props;
  return (
    <li className="recycle__li_garbage">
      <input
        type="radio"
        className="input-radio"
        value={props.image}
        checked={value == props.image ? true : false}
        {...register(label, {
          required: 'Enter a type of marking waste',
        })}
        onChange={onChange}
      />
      <label htmlFor="radio">
        <img className="image-form" src={props.image} alt={props.name} />
      </label>
    </li>
  );
};

export default FormRadio;
