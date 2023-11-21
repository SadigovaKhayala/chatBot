import React from "react";

const InputForm = ({ handleChange, handleSubmit, inputValue }) => {
  return (
    <div className="inputForm w-100  col-12 d-flex align-items-center justify-content-center ">
      <form onSubmit={handleSubmit} className="w-100 d-flex ">
        <div className="input-group ">
          <input
            type="text"
            id="inputValue"
            name="inputValue"
            className="form-control text-start ps-5"
            value={inputValue}
            onChange={handleChange}
            title="Please enter a value "
            aria-describedby="button-addon2"
            placeholder="Seçiminizi daxil edin"
            required
          />
          <button
            onSubmit={handleSubmit}
            className="btn btn-light"
            id="button-addon2"
            type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
