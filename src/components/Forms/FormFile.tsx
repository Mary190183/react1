import React, { ChangeEvent, useRef, useState } from 'react';
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

type InputFileProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const FormFile: FC<InputFileProps> = ({ ...rest }) => {
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: file,
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
  localStorage.setItem('fileInput', JSON.stringify(file?.name));
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
              onChange={handleFileChange}
              name="file"
              {...rest}
            />
            <div className="input-file-text-1" ref={inputRef}>
              {file && `${file.name} - ${file.type}`}
            </div>
          </div>
        </label>
      </div>
      <button className="button-form" type="button" onClick={handleUploadClick}>
        Upload
      </button>
    </div>
  );
};

export default FormFile;
