import React from "react";

const Select = ({ type, name, label, value }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <select className="border" type={type}>
        <option value={value}>{label}</option>
      </select>
    </div>
  );
};

export default Select;
