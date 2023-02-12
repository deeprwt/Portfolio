import React from "react";
import Deepak from "../../assets/icon/human.png";
import AnimationVideo from "./AnimationVideo";

const Story = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      {/* <div className="flex w-full sm:w-1/2 flex-col justify-center items-center">
        <div className="flex">
          <img
            src={Deepak}
            className="max-w-full rounded-xl shadow-lg hover:shadow-cyan-500/50 h-96"
            alt=""
          />
        </div>
      </div> */}
      <div className="flex w-full flex-col justify-center">
        <div className="w-full sm:w-[60%] items-center">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-1 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blue-400"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist">
                <i className="fas fa-space-shuttle text-base mr-1"></i> Story
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-1 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blue-400"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist">
                <i className="fas fa-cog text-base mr-1"></i> Skills
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-1 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blue-400"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist">
                <i className="fas fa-briefcase text-base mr-1"></i> Experience
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full p-5 items-center">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <h1 className="text-4xl p-4 font-bold">My Story</h1>
                <p className="text-lg p-4">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <h1 className="text-2xl p-4 font-bold">
                  I Do Web Design & Developement since I was 18 Years Old
                </h1>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <h1 className="text-4xl p-4 font-bold">Skills</h1>
                <p className="text-lg p-4">
                  Far far away, behind the word mountains,
                </p>

                <div className="w-full m-3">
                  <div className="flex justify-between">
                    <span className="uppercase font-bold font-sans ">
                      HTML 5
                    </span>
                    <span className="text-center text-[#0779e4]">100%</span>
                  </div>
                  <div className="h-auto rounded-lg border-2 w-full bg-slate-200">
                    <div
                      className="w-full bg-gradient-to-r from-red-400 via-blue-400 to-blue-900  rounded-lg h-5"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="w-full m-3">
                  <div className="flex justify-between">
                    <span className="uppercase font-bold font-sans ">
                      CSS 3
                    </span>
                    <span className="text-center text-[#0779e4]">100%</span>
                  </div>
                  <div className="h-auto rounded-lg border-2 w-full bg-slate-200">
                    <div
                      className="w-full bg-gradient-to-r  from-red-400 via-blue-400 to-blue-900  rounded-lg h-5"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="w-full m-3">
                  <div className="flex justify-between">
                    <span className="uppercase font-bold font-sans ">
                      JAVASCRIPT
                    </span>
                    <span className="text-center text-[#0779e4]">90%</span>
                  </div>
                  <div className="h-auto rounded-lg border-2 w-full bg-slate-200">
                    <div
                      className="w-[90%] bg-gradient-to-r  from-red-400 via-blue-400 to-blue-900 rounded-lg h-5"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                </div>
                {/* <div className="w-full m-3">
                  <div className="flex justify-between">
                    <span className="uppercase font-bold font-sans ">
                      JAVASCRIPT
                    </span>
                    <span className="text-center text-[#0779e4]">90%</span>
                  </div>
                  <div className="h-auto rounded-lg border-2 w-full bg-slate-200">
                    <div
                      className="w-[90%] bg-gradient-to-r  from-red-400 via-blue-400 to-blue-900  rounded-lg h-5"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div> */}
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <h1 className="text-4xl p-4 font-bold">Experience</h1>
                <p className="text-lg p-4">
                  I create successful responsive websites that are fast, easy to
                  use, and built with best practices. The main area of my
                  expertise is front-end development, HTML, CSS, JS, building
                  small and medium web apps, custom plugins, features,
                  animations, and coding interactive layouts.
                </p>
                <div className="">
                  <AnimationVideo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
