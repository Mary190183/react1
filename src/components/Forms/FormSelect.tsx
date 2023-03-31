import { FC } from 'react';

interface SelectTitleProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  ref: React.LegacyRef<HTMLSelectElement> | undefined;
}

const FormSelect: FC<SelectTitleProps> = (props) => {
  const { value, onChange, ref } = props;
  return (
    <div className="input-box">
      <label htmlFor="type">
        <h5>Type of waste: </h5>
      </label>
      <select id="type" value={value} onChange={onChange} ref={ref} required>
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
