import React from "react";
import ServiceCard from "./ServiceCard";

import html from "../../assets/images/html.jpg";
import css from "../../assets/images/css.jpg";
import js from "../../assets/images/js.jpg";

const ServiceCardsData = () => {
  return (
    <div className="relative pb-4 pt-12">
      <div className="px-4 md:px-10 mx-auto w-full mb-6">
        <div>
          {/* Card stats */}
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 sm:w-6/12 xl:w-3/12 px-4 mb-6">
              <ServiceCard
                subWord="D"
                title="HTML"
                subheader="September 14, 2016"
                img={html}
                paragrap1="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                pHead="Method:"
                paragrap2=" This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. "
              />
            </div>
            <div className="w-full lg:w-6/12 sm:w-6/12 xl:w-3/12 px-4 mb-6">
              <ServiceCard
                subWord="D"
                title="CSS"
                subheader="September 14, 2016"
                img={css}
                paragrap1="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                pHead="Method:"
                paragrap2=" This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. "
              />
            </div>
            <div className="w-full lg:w-6/12 sm:w-6/12 xl:w-3/12 px-4 mb-6">
              <ServiceCard
                subWord="D"
                title="JAVASCRIPT"
                subheader="September 14, 2016"
                img={js}
                paragrap1="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                pHead="Method:"
                paragrap2=" This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. "
              />
            </div>
            <div className="w-full lg:w-6/12 sm:w-6/12 xl:w-3/12 px-4 mb-6">
              <ServiceCard
                subWord="D"
                title="React"
                subheader="September 14, 2016"
                img={html}
                paragrap1="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                pHead="Method:"
                paragrap2=" This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardsData;
