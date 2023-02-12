import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import background2 from "../../assets/images/background2.png";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <nav
        className="w-full flex h-16 shadow-2xl fixed gap-2 z-50 bg-white"
        style={{ backgroundImage: `url(${background2})` }}>
        <div className="w-2/5 sm:w-1/5 text-lg  flex font-[cursive] items-center text-white cursor-pointer bg-[#346f75] justify-center ">
          <span className="text-4xl">D</span>eepa
          <span className="text-4xl">k</span>
        </div>
        <div className="w-3/5 md:flex justify-end hidden sm:block ">
          <ul className="capitalize flex ">
            <NavLink to="/" exact>
              <li className="p-5 font-semibold cursor-pointer uppercase ">
                Home
              </li>
            </NavLink>
            <NavLink to="/about" exact>
              <li className="p-5 font-semibold cursor-pointer uppercase">
                about_us
              </li>
            </NavLink>
            <NavLink to="/skills" exact>
              <li className="p-5 font-semibold cursor-pointer uppercase">
                skills
              </li>
            </NavLink>
            <NavLink to="/contact" exact>
              <li className="p-5 font-semibold cursor-pointer uppercase">
                contact_us
              </li>
            </NavLink>
          </ul>
        </div>
        <div
          className="w-1/5 justify-end fixed sm:hidden lg:hidden block top-0 right-0"
          onClick={() => setOpenNav(!openNav)}>
          <Hamburger toggled={openNav} toggle={setOpenNav} />
        </div>
        {openNav && (
          <div
            style={{ backgroundImage: `url(${background2})` }}
            className={`w-full flex justify-end sm:hidden flex-col fixed top-16 md:z-auto z-[-1]  ease-linear duration-100 transition-all shadow-2xl`}>
            <ul
              className={`capitalize flex flex-col justify-center items-center`}
              onClick={() => setOpenNav(false)}>
              <NavLink to="/" exact>
                <li className="p-5 font-semibold cursor-pointer uppercase ">
                  Home
                </li>
              </NavLink>
              <NavLink to="/about" exact>
                <li className="p-5 font-semibold cursor-pointer uppercase">
                  about_us
                </li>
              </NavLink>
              <NavLink to="/skills" exact>
                <li className="p-5 font-semibold cursor-pointer uppercase">
                  skills
                </li>
              </NavLink>
              <NavLink to="/contact" exact>
                <li className="p-5 font-semibold cursor-pointer uppercase">
                  contact_us
                </li>
              </NavLink>
            </ul>
          </div>
        )}
        <div className="w-1/5 sm:flex items-center hidden sm:justify-center justify-end">
          <span className="flex justify-center items-center md:gap-3">
            <IconButton color="primary">
              <FacebookOutlinedIcon />
            </IconButton>
            <IconButton color="primary" className="w-fit rounded-lg">
              <InstagramIcon />
            </IconButton>
            <IconButton color="primary" className="w-fit rounded-lg">
              <TwitterIcon />
            </IconButton>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Nav;
