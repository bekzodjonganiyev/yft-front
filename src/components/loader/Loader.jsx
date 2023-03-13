import React from "react";
import "./Loader.css"

export const Loader = () => {
  return (
    <div className="w-screen h-screen text-center bg-orange-200">
      <div className="p-10 text-3xl bg-orange-400">
        Loading...
      </div>
      {/* <div classname="wheat bg-black z-40"></div> */}
    </div>
  );
};
