import { useState, useEffect } from 'react';

const FormDate = () => {
  const [dateInput, setDateInput] = useState(() => {
    const saved2 = localStorage.getItem('dateInput') as string;
    const initialValue = JSON.parse(saved2);
    return initialValue || '';
  });
  useEffect(() => {
    localStorage.setItem('dateInput', JSON.stringify(dateInput));
  }, [dateInput]);
  return (
    <div className="input-box">
      <label htmlFor="date">
        <h5>Date</h5>
      </label>
      <input
        name="date"
        type="date"
        className="input-date"
        value={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
      />
    </div>
  );
};

export default FormDate;
