import { FC, forwardRef } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface InputTitleProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormTitle: FC<InputTitleProps> = forwardRef((props) => {
  const { value, onChange } = props;
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
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
});

export default FormTitle;
