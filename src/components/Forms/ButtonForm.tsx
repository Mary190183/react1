import React from 'react';
import { FC } from 'react';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';
import { DataFormCard } from 'types/types';
interface InputTitleProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  label: Path<DataFormCard>;
}

export const ButtonForm: FC<InputTitleProps> = (props) => {
  const { register, errors, label } = props;
  return (
    <div className="input-box">
      <input
        data-testid="button-form"
        className="button-form"
        type="submit"
        {...register(label, {
          required: 'Enter a data',
        })}
        value="Submit"
      ></input>
      <div className="error">
        {(errors?.title || errors?.date || errors?.file || errors?.select || errors?.radio) && (
          <p>Please, enter correct or missing date!</p>
        )}
      </div>
    </div>
  );
};
