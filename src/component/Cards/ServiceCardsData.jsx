import React from "react";
import ServiceCard from "./ServiceCard";

import hero from "../../assets/images/hero.png";

const ServiceCardsData = () => {
  return (
    <div className="relative pb-4 pt-12">
      <div className="px-4 md:px-10 mx-auto w-full mb-6">
        <div>
          {/* Card stats */}
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
              <ServiceCard
                subWord="D"
                title="React"
                subheader="September 14, 2016"
                img={hero}
                paragrap1="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                pHead="Method:"
                paragrap2=" This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. "
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
              <ServiceCard
                subWord="D"
                title="React"
                subheader="September 14, 2016"
                img={hero}
                paragrap1="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                pHead="Method:"
                paragrap2=" This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. "
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
              <ServiceCard
                subWord="D"
                title="React"
                subheader="September 14, 2016"
                img={hero}
                paragrap1="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                pHead="Method:"
                paragrap2=" This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. "
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
              <ServiceCard
                subWord="D"
                title="React"
                subheader="September 14, 2016"
                img={hero}
                paragrap1="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                pHead="Method:"
                paragrap2=" This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. "
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
              <ServiceCard
                subWord="D"
                title="React"
                subheader="September 14, 2016"
                img={hero}
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
