import { FC } from 'react';

interface InputCheckProps {
  checked: boolean | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormCheckbox: FC<InputCheckProps> = (props) => {
  const { checked, onChange } = props;
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className="input-checkbox"
        name="checkbox"
        data-testid="input-checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="checkbox">Degree of purity of waste</label>
    </div>
  );
};

export default FormCheckbox;
