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

const FormFile: FC<InputTitleProps> = (props) => {
  const { register, label, errors, value, onChange } = props;
  return (
    <div className="profile-form input-logo">
      <h4 className="birth-title v"> Waste image: </h4>
      <div className="file-form">
        <label className="input-file svg-container">
          <div className="input-box">
            <label htmlFor="file">
              <p>Upload file</p>
            </label>
            <input
              className="input-file"
              type="file"
              {...register(label, {
                required: 'Choose a file',
              })}
              onChange={onChange}
            />
            <div className="input-file-text-1">{value}</div>
          </div>
        </label>
      </div>
      <div className="error">{errors?.file && <p>{`${errors.file.message}` || 'Error'}</p>}</div>
    </div>
  );
};

export default FormFile;
