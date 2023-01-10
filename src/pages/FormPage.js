import React from "react";
import Forms from "../components/Form";

const FormPage = () => {
  return (
    <div className="flex h-[100vh] bg-gray-50 ">
      <div className="flex-1 hidden md:flex">
        <img src="assets/shake.svg" alt="imageForm" className="h-full" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Forms />
      </div>
    </div>
  );
};

export default FormPage;
