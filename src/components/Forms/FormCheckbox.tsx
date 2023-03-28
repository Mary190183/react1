import { useState, useEffect } from 'react';

const FormCheckbox = () => {
  const [checkInput, setCheckInput] = useState(() => {
    const saved = localStorage.getItem('checkInput') as string;
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  useEffect(() => {
    localStorage.setItem('checkInput', JSON.stringify(checkInput));
  }, [checkInput]);
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className="input-checkbox"
        name="checkbox"
        data-testid="input-checkbox"
        checked={checkInput}
        onChange={(e) => setCheckInput(e.target.checked)}
        required
      />
      <label htmlFor="checkbox">Unmarked</label>
    </div>
  );
};

export default FormCheckbox;
