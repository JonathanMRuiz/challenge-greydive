import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const navList = [
    { name: "Home", path: "/" },
    { name: "Formulario", path: "/form" },
  ];

  const handleClickNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className="w-full h-[80px] flex justify-around items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div>
        <Link to="/" className="font-bold text-white text-xl">
          Jonathan Matias Ruiz
        </Link>
      </div>

      <div className="flex">
        {navList.map((item, index) => (
          <ul className="hidden md:flex" key={index}>
            <li>
              <Link to={item.path} className="ml-3">
                {item.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
      <div onClick={handleClickNav} className="md:hidden z-10">
        {!toggleNav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !toggleNav
            ? "hidden"
            : "absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {navList.map((item, index) => (
          <div key={index}>
            <li className="py-6 text-4xl" key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          </div>
        ))}
        <div className="flex justify-center lg:hidden h-6 mt-6"></div>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul></ul>
      </div>
    </div>
  );
};

export default Navbar;
