const FormFile = () => {
  return (
    <form className="profile-form input-logo">
      <h4 className="birth-title v"> Waste image: </h4>
      <div className="file-form">
        <label className="input-file svg-container">
          <div className="input-box">
            <label htmlFor="file">
              <p>Unload foto</p>
            </label>
            <input className="input-file" type="file" name="file" id="file" />
            <span className="input-file-text-1"> Max 512кБ(.png) </span>
          </div>
        </label>
      </div>
      <div className="foto"></div>
      <button className="button-profile end send-form" className='button-form'> Save </button>
    </form>
  );
};

export default FormFile;
