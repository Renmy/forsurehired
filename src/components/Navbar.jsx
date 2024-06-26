import { useState } from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import NavLinks from "./NavLinks";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-wrap justify-between items-center bg-white shadow-lg px-[5%] md:px-0 mb-6">
      <div className="flex flex-row items-center justify-between w-[100%] mx-auto md:w-[80%]">
        <div className="inline-flex gap-2 items-center ">
          <NavLink onClick={() => setIsOpen(false)} to="/">
            <img src={logo} alt="logo img" className="h-16" />
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/"
            className="flex flex-col items-center"
          >
            <h1 className="text-3xl font-bold text-slate-700">forSure Hired</h1>
            <span className="text-sm text-slate-400 tracking-widest">
              The Ultimate Job Tracker
            </span>
          </NavLink>
        </div>
        <div className="hidden md:flex flex-col md:flex-row gap-6 text-lg text-slate-600">
          <NavLinks />
        </div>
        <button className="md:hidden">
          {isOpen ? (
            <FontAwesomeIcon
              onClick={toggleNav}
              className="text-3xl text-green-600"
              icon={faX}
            />
          ) : (
            <FontAwesomeIcon
              onClick={toggleNav}
              className="text-3xl text-slate-700"
              icon={faBars}
            />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex basis-full flex-col items-center gap-4 py-6 text-lg text-slate-600">
          <NavLinks setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};
