import React from "react";

const TextField = ({ name, type, label, required, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={label}
        className="border"
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
