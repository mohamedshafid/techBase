import React from "react";
import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full h-[200px] flex items-center justify-center">
      <Loader className="w-8 h-8 text-blue-500 animate-spin" />
    </div>
  );
};

export default Loading;
