const FormTitle = () => {
  return (
    <form className="input-box">
      <label htmlFor="title">
        <h5>Title </h5>
      </label>
      <input className="input-title" name="title" placeholder="Enter text ..." type="text"></input>
    </form>
  );
};

export default FormTitle;
