import { DataRadio } from '../../types/types';
import { useState } from 'react';

const FormCard = (props: DataRadio) => {
  const [mean, setValue] = useState<string>();

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  localStorage.setItem('radioInput', String(mean));

  return (
    <li className="recycle__li_garbage">
      <input
        className="input-radio"
        value={props.image}
        checked={mean == props.image ? true : false}
        onChange={radioHandler}
        name="radio"
        type="radio"
        required
      />
      <label htmlFor="radio">
        <img className="image-form" src={props.image} alt={props.name} />
      </label>
    </li>
  );
};

export default FormCard;
