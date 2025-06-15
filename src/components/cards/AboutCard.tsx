"use client";
import React from "react";
import { CardWrapper } from "../CardWrapper";
import { useNavContext } from "@/context/navContext";
import { useModal } from "@/components/ui/AnimatedModal";

export const AboutCard = () => {
  const { setNavName } = useNavContext();
  const { setActiveModal } = useModal();

  return (
    <CardWrapper className="bg-purple-600 w-full md:w-1/2 h-auto md:h-[400px]">
      <div className="p-4 md:p-8 flex flex-col justify-between h-full gap-6">
        <div className="flex flex-col gap-2 md:gap-4">
          <p className="text-2xl md:text-6xl font-semibold text-white">
            Riten Gurung
          </p>
          <p className="text-md md:text-2xl font-normal text-white">
            Web Developer
          </p>
          <p className="text-xs md:text-lg font-normal text-white/70">
            Creating static and dynamic web contents.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row w-full gap-2">
          <button
            className="cursor-pointer w-full sm:w-1/2 px-6 py-2 border border-black bg-transparent text-black dark:border-white relative group transition duration-200"
            onClick={() => setNavName("Work")}
          >
            <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative">View Work</span>
          </button>

          <button
            onClick={() => setActiveModal("resume")}
            className="cursor-pointer w-full sm:w-1/2 px-6 py-2 border border-black bg-transparent text-black dark:border-white relative group transition duration-200"
          >
            <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative">Resume</span>
          </button>
        </div>
      </div>
    </CardWrapper>
  );
};
