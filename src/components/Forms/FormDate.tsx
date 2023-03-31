import { FC } from 'react';

interface InputDateProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  ref: React.LegacyRef<HTMLInputElement> | undefined;
}

export const FormDate: FC<InputDateProps> = (props) => {
  const { value, onChange, ref } = props;
  return (
    <div className="input-box">
      <label htmlFor="date">
        <h5>Date</h5>
      </label>
      <input
        name="date"
        type="date"
        value={value}
        onChange={onChange}
        ref={ref}
        className="input-date"
        required
      />
    </div>
  );
};
