import React from "react";

import hero from "../../assets/images/hero.png";
import html from "../../assets/videos/html.mp4";
import css from "../../assets/videos/css2.mp4";
import js from "../../assets/videos/javascript.mp4";

const AnimationVideo = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-1/3">
          <video autoPlay loop muted>
            <source src={html} type="video/mp4" />
          </video>
          <h1 className="text-center font-[cursive] text-lg text-blue-400 ">
            1.6 Year Experience
          </h1>
        </div>
        <div className="w-1/3">
          <video autoPlay loop muted>
            <source src={css} type="video/mp4" />
          </video>
          <h1 className="text-center font-[cursive] text-lg text-blue-400 ">
            1.3 Year Experience
          </h1>
        </div>
        <div className="w-1/3">
          <video autoPlay loop muted poster={hero}>
            <source src={js} type="video/mp4" />
          </video>
          <h1 className="text-center font-[cursive] text-lg text-blue-400 ">
            1 Year Experience
          </h1>
        </div>
      </div>
    </>
  );
};

export default AnimationVideo;
