import React from "react";
import { Link } from "react-router-dom";

const Template = ({ data: { id, name, imageSrc } }) => {
  return (
    <div className=" flex justify-center items-center cursor-pointer  ">
      <div className="group h-510 relative overflow-hidden rounded-lg">
        <img
          src={imageSrc}
          alt=""
          className=" w-350 h-510 group-hover:opacity-70 rounded-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:bg-blackOverlay duration-150 transition-all ease-in-out"></div>

        <div
          className="absolute  top-5 left-2 text-white -translate-y-20 font-bold text-2xl
        group-hover:translate-y-0 group-hover:delay-150 duration-100 ease-in-out transition-all"
        >
          {name}
        </div>

        <Link
          to={`/resume/${id}`}
          className="absolute w-full flex justify-center items-center bottom-5 text-white translate-y-20 
            group-hover:translate-y-0 group-hover:delay-150 duration-150 ease-in-out transition-all"
        >
          <div className="bg-red-500 w-60 p-2 text-white text-base font-bold flex justify-center items-center rounded-lg">
            Use this template
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Template;
