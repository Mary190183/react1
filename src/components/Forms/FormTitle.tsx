import { useState, useEffect } from 'react';
import React from 'react';

const FormTitle = () => {
  const input = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);
  const [titleInput, setTitleInput] = useState(() => {
    const saved = localStorage.getItem('titleInput') as string;
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  useEffect(() => {
    localStorage.setItem('titleInput', JSON.stringify(titleInput));
  }, [titleInput]);

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
