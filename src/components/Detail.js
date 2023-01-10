import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Details = ({ name, email, country, terms, birth }) => {
  return (
    <div className=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-3 mt-10  ">
      <div className="">
        <div className="w-[1200px] bg-white max-w-xs shadow-lg   mx-auto border-b-4 border-[#0a192f] rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
          <div className="dark:bg-gray-700  flex h-20 items-center" />
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <p className="py-3 px-3">Nombre completo:</p>
              <p className="text-bold text-black text-xl">{name}</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="py-6 px-6 ">Email: </p>
              <p className="text-bold text-black text-xl">{email}</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="py-6 px-6 ">Pais de origen: </p>
              <p className="text-bold text-black text-xl">{country}</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="py-6 px-6 ">Fecha de nacimiento: </p>
              <p className="text-bold text-black text-xl">{birth}</p>
            </div>
          </div>

          <Link to="/" className="flex justify-center px-5 mb-2 text-sm ">
            <button
              type="button"
              className="border border-blue-700 text-blue-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Volver a inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;

Details.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  country: PropTypes.string,
  birth: PropTypes.string,
  terms: PropTypes.bool,
};
