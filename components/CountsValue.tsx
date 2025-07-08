"use client";

import React from "react";
import CountUp from "react-countup";

const CountsValue = ({ value,isRupee }: { value: number,isRupee?:boolean }) => {

  if(isRupee){
    return <CountUp end={value} duration={2} prefix="₹ " />;

  }
  else{
    return <CountUp end={value} duration={2} />;

  }

 
};

export default CountsValue;
