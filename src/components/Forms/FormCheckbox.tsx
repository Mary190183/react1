const FormCheckbox= () => {
  return (
    <form>
        <div className="checkbox-container">
          <input type="checkbox" className="input-checkbox" name="check1" data-testid="input-checkbox" />
          <label htmlFor="check1">Unmarked</label>
        </div>
    </form>
  );
};

export default FormCheckbox;