import { RefObject } from 'react';
import React from 'react';

const FormTitle = (props: {
  value: React.SetStateAction<string>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="input-box">
      <label htmlFor="title">
        <h5>Title </h5>
      </label>
      <input
        className="input-title"
        name="title"
        placeholder="Enter text ..."
        type="text"
        minLength={3}
        required
      ></input>
    </div>
  );
};

export default FormTitle;
