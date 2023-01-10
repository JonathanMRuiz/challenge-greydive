import React from "react";

const Footer = () => {
  return (
    <footer className="hidden p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Challenge realizado por Jonathan Ruiz
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://www.linkedin.com/in/jonathanmruiz/"
            className="mr-4 hover:underline md:mr-6 "
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <p>Correo: jonathanmruiz@yahoo.com</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
