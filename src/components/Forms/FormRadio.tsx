import React from 'react';
import { DataRadio } from '../../types/types';
import { useState } from 'react';

const FormRadio = (props: DataRadio) => {
  const [mean, setValue] = useState<string>();
  const input = React.useRef<HTMLInputElement>(null);
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  if (input.current?.value) {
    localStorage.setItem('radioInput', input.current?.value);
  }
  return (
    <li className="recycle__li_garbage">
      <input
        className="input-radio"
        value={props.image}
        checked={mean == props.image ? true : false}
        onChange={radioHandler}
        name="radio"
        type="radio"
        ref={input}
        required
      />
      <label htmlFor="radio">
        <img className="image-form" src={props.image} alt={props.name} />
      </label>
    </li>
  );
};

export default FormRadio;
