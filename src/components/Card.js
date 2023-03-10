import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ id, response }) {
  return (
    <div className="m-5  max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/cardPage/${id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {response.full_name}
        </h5>
      </Link>
      <Link
        to={`/cardPage/${id}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Detalles de encuestado
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
        </svg>
      </Link>
    </div>
  );
}

export default Card;

Card.propTypes = {
  id: PropTypes.string,
  response: PropTypes.shape({
    full_name: PropTypes.string,
  }),
};
