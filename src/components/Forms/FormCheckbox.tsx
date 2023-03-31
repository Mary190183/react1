import { useState, useEffect, FC } from 'react';

interface InputCheckProps {
  checked: boolean | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  ref: React.LegacyRef<HTMLInputElement> | undefined;
}

const FormCheckbox: FC<InputCheckProps> = (props) => {
  const { checked, onChange, ref } = props;
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className="input-checkbox"
        name="checkbox"
        data-testid="input-checkbox"
        checked={checked}
        onChange={onChange}
        ref={ref}
        required
      />
      <label htmlFor="checkbox">Unmarked</label>
    </div>
  );
};

export default FormCheckbox;
