import { RefObject } from 'react';

const FormDate = (props: {
  value: React.SetStateAction<string>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="input-box">
      <label htmlFor="date">
        <h5>Date</h5>
      </label>
      <input name="date" type="date" className="input-date" required />
    </div>
  );
};

export default FormDate;
