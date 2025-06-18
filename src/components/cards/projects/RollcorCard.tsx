"use client";
import { CardWrapper } from "@/components/CardWrapper";
import React from "react";
import Image from "next/image";
import rollcorLogo from "../../../../public/image.png";

const techStacks: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "Leaflet.js",
];
export const RollcorCard = () => {
  return (
    <CardWrapper
      className="h-full overflow-y-auto custom-scrollbar  bg-white shadow-xl w-full"
      onClick={() => {
        window.open("https://rollcor.com/");
      }}
    >
      <div className="h-1/3 bg-white items-center justify-center rounded-t-md flex relative">
        <Image
          src={rollcorLogo}
          alt="logo"
          className="w-1/2 object-contain"
          width={100}
        />
        <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold rounded-full px-2.5 py-0.5">
          Featured
        </span>
      </div>{" "}
      <div className="p-4 border-t border-gray-100">
        <p className="text-md text-gray-900 font-semibold mb-2">Rollcor</p>
        <p className="text-sm text-gray-500 mb-4">
          A business site for the Rollcor door systems company.
        </p>
        <div className="flex mb-2 flex-wrap gap-2">
          {techStacks.map((techStack) => (
            <span
              key={techStack}
              className="border border-gray-200 text-gray-800 text-xs font-semibold rounded-full px-2.5 py-0.5"
            >
              {techStack}
            </span>
          ))}
        </div>
      </div>{" "}
    </CardWrapper>
  );
};
