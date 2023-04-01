import React from 'react';
import { FC } from 'react';

interface InputTitleProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormFile: FC<InputTitleProps> = (props) => {
  const { value, onChange } = props;
  return (
    <div className="profile-form input-logo">
      <h4 className="birth-title v"> Waste image: </h4>
      <div className="file-form">
        <label className="input-file svg-container">
          <div className="input-box">
            <label htmlFor="file">
              <p>Upload file</p>
            </label>
            <input className="input-file" type="file" onChange={onChange} name="file" required />
            <div className="input-file-text-1">{value}</div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default FormFile;
