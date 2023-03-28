import { useState } from 'react';
import React from 'react';

const FormTitle = () => {
  const input = React.useRef<HTMLInputElement>(null);
  const [titleInput, setTitleInput] = useState();
  console.log(input.current?.value);
  return (
    <div className="input-box">
      <label htmlFor="title">
        <h5>Title </h5>
      </label>
      <input
        className="input-title"
        name="title"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
        placeholder="Enter text ..."
        ref={input}
        type="text"
      ></input>
    </div>
  );
};

export default FormTitle;
