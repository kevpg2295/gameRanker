import React from "react";

const Input = ({ type, value, onChange }) => {
  return (
    <input
      className="form-input"
      type={type}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
