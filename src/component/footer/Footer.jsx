import React from 'react';
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full bg-red-400 flex">
          <div className="w-1/3 justify-center items-center flex">
          <div className="w-auto h-fit text-lg p-3 flex font-[cursive] items-center text-white cursor-pointer  justify-center rounded-lg ">
          <span className="text-4xl">D</span>eepa
          <span className="text-4xl">k</span>
        </div>
          </div>
        <div className="w-1/3 justify-center flex">
            <div className="">
                <h1 className="font-semibold text-white">Usefull links</h1>
                <ul className="capitalize ">
            <NavLink to="/" exact>
              <li className="p-2 font-semibold cursor-pointer uppercase ">
                Home
              </li>
            </NavLink>
            <NavLink to="/about" exact>
              <li className="p-2 font-semibold cursor-pointer uppercase">
                about_us
              </li>
            </NavLink>
            <NavLink to="/gallery" exact>
              <li className="p-2 font-semibold cursor-pointer uppercase">
                gallery
              </li>
            </NavLink>
            <NavLink to="/contact" exact>
              <li className="p-2 font-semibold cursor-pointer uppercase">
                contact_us
              </li>
            </NavLink>
          </ul>
            </div>
        </div>
        <div className="w-1/3 justify-center flex">3</div>
    </footer>
  )
}

export default Footer