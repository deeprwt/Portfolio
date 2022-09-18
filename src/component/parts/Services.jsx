import React from "react";
import ServiceCardsData from "../Cards/ServiceCardsData";

const Services = () => {
  return (
    <div className="w-full mt-10 text-center ">
      <h1 className="font-bold text-blue-400 m-5">SERVICES</h1>
      <h2 className="font-bold text-3xl ">
        This is My Expertise, The Services I'll Provide My Clients
      </h2>
      <ServiceCardsData />
    </div>
  );
};

export default Services;
