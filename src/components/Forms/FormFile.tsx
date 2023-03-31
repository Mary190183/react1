import React, { ChangeEvent, useRef, useState } from 'react';
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

type InputFileProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface InputTitleProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  ref: React.LegacyRef<HTMLInputElement> | undefined;
}

const FormFile: FC<InputTitleProps> = (props) => {
  const { value, onChange, ref } = props;
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
            <div className="input-file-text-1" ref={ref}>
              {value}
            </div>
          </div>
        </label>
      </div>
      {/* <button className="button-form" type="button" onClick={handleUploadClick}>
        Upload
      </button> */}
    </div>
  );
};

export default FormFile;
