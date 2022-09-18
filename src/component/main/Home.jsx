import { Button } from "@mui/material";
import React from "react";
// import Main_Slider from "../slider/Main_Slider";

import hero from "../../assets/images/hero.png";
import back from "../../assets/images/background.png";
import Story from "../parts/Story";
import TypeWriter from "../slider/TypeWriter";
import Services from "../parts/Services";
import Timer from "../parts/Timer";

export const Home = () => {
  return (
    <>
      <div
        className="w-full bg-no-repeat bg-cover bg-fixed"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="w-[90%] m-auto flex flex-col sm:flex-row h-[100vh] justify-around">
          <div className="flex w-full sm:w-8/12 flex-col justify-center">
            <h1 className="flex  items-center font-bold font-serif">
              <span className="text-[#002057] text-4xl sm:text-6xl">
                Hi, <br />
                I'm<span className="text-[#ff7b00]"> Deepak Rawat</span>
                <br />
                Web Developer
              </span>
            </h1>
            <p className="py-5 capitalize flex font-semibold text-base sm:text-xl md:text-2xl">
              I Am Into &nbsp;
              <span>
                <TypeWriter />
              </span>
            </p>
            <Button
              variant="contained"
              className=" h-[40px] w-56 shadow-slate-600 shadow-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Contact Me
            </Button>
          </div>
          <div className="flex w-full sm:w-4/12 flex-col justify-center items-center">
            <div className="flex">
              <img src={hero} className="rounded-full w-60" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full m-auto flex flex-col sm:flex-row mt-40">
        <Story />
      </div>
      <div className="w-full mt-40 text-center ">
        <Services />
      </div>
      <Timer />
    </>
  );
};
