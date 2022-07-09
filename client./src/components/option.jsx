import React, { useState } from "react";

function Option({ name, getValue, checked }) {
  const [check, setCheck] = useState(false);
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckChecked"
          value={name}
          checked={check && checked}
          onChange={(e) => {
            getValue(e.target.value);
            setCheck(e.target.checked);
          }}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          {name}
        </label>
      </div>
    </>
  );
}

export default Option;
