const FormTitle = () => {
  return (
    <form className="input-box">
      <label htmlFor="type">
        <h5>Type of waste: </h5>
      </label>
      <select id="type">
        <option>Plastic</option>
        <option>Metal</option>
        <option>Paper</option>
        <option>Glass</option>
        <option>Unsort</option>
      </select>
    </form>
  );
};

export default FormTitle;
