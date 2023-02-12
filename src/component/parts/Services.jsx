import React from "react";
import ServiceCardsData from "../Cards/ServiceCardsData";

const Services = () => {
  return (
    <>
      {/* <h1 className="font-bold text-blue-400 m-5">SERVICES</h1> */}
      <h2 className="font-bold text-4xl font-serif ">
        This is My Expertise, The Services <br />
        I'll Provide My Clients
      </h2>
      <ServiceCardsData />
    </>
  );
};

export default Services;
