import { FC } from 'react';

interface SelectTitleProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const FormSelect: FC<SelectTitleProps> = (props) => {
  const { value, onChange } = props;
  return (
    <div className="input-box">
      <label htmlFor="type">
        <h5>Type of waste: </h5>
      </label>
      <select id="type" value={value} onChange={onChange} required>
        <option></option>
        <option>Plastic</option>
        <option>Metal</option>
        <option>Paper</option>
        <option>Glass</option>
        <option>Unsort</option>
      </select>
    </div>
  );
};

export default FormSelect;
