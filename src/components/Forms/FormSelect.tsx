import { useState, useEffect } from 'react';

const FormTitle = () => {
  const [selectInput, setSelectInput] = useState(() => {
    const saved1 = localStorage.getItem('selectInput') as string;
    const initialValue = JSON.parse(saved1);
    return initialValue || '';
  });
  useEffect(() => {
    localStorage.setItem('selectInput', JSON.stringify(selectInput));
  }, [selectInput]);
  return (
    <div className="input-box">
      <label htmlFor="type">
        <h5>Type of waste: </h5>
      </label>
      <select
        id="type"
        value={selectInput}
        onChange={(e) => setSelectInput(e.target.value)}
        required
      >
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

export default FormTitle;
