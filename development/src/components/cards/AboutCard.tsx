import React from "react";
import { CardWrapper } from "../CardWrapper";

export const AboutCard = () => {
  return (
    <CardWrapper className="bg-purple-600 h-[400px] w-1/2">
      <div className="p-8 justify-between flex flex-col h-full">
        <div className="flex flex-col gap-4">
          <p className="text-6xl font-semibold text-white">Riten Gurung</p>
          <p className="text-2xl font-normal text-white">Frontend Developer</p>
          <p className="text-lg font-normal text-white/70">
            Creating static and dymanic web contents.
          </p>
        </div>
        <button className="cursor-pointer w-1/2 px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
          <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
          <span className="relative">View Work</span>
        </button>
      </div>
    </CardWrapper>
  );
};
