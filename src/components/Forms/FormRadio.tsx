import React, { FC } from 'react';
import { DataRadio } from '../../types/types';

interface InputTitleProps extends DataRadio {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  ref: React.LegacyRef<HTMLInputElement> | undefined;
}

const FormRadio: FC<InputTitleProps> = (props) => {
  const { value, onChange, ref } = props;
  return (
    <li className="recycle__li_garbage">
      <input
        className="input-radio"
        value={props.image}
        checked={value == props.image ? true : false}
        onChange={onChange}
        name="radio"
        type="radio"
        ref={ref}
        required
      />
      <label htmlFor="radio">
        <img className="image-form" src={props.image} alt={props.name} />
      </label>
    </li>
  );
};

export default FormRadio;
