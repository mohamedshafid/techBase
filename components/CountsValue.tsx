"use client";

import React from "react";
import CountUp from "react-countup";

const CountsValue = ({ value }: { value: number }) => {
  return <CountUp end={value} duration={2} prefix="₹ " />;
};

export default CountsValue;
