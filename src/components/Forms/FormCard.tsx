import { DataRadio } from 'types/types';

const FormCard = (props: DataRadio) => {
  return (
    <li className="recycle__li_garbage">
      <input className="input-radio" name="radio" type="radio" />
      <label htmlFor="radio">
        <img className="image-form" src={props.image} alt={props.name} />
      </label>
    </li>
  );
};

export default FormCard;
