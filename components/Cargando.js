import React from "react";

const CircleSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="relative w-24 h-12">
        <div className="absolute w-12 h-12 border-b-2 border-slate-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default CircleSpinner;
