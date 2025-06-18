"use client";
import { CardWrapper } from "@/components/CardWrapper";
import React from "react";
const techStacks: string[] = [
  "React.js",
  "React Query",
  "Redux Toolkit",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
];
export const AccessCrateCard = () => {
  return (
    <CardWrapper
      className="h-full bg-white shadow-xl w-full overflow-y-auto custom-scrollbar"
      onClick={() => {
        window.open("https://github.com/Riten1/Access-Crate");
      }}
    >
      <div className="h-1/3 bg-amber-50 items-center justify-center rounded-t-md flex relative">
        <p className="text-2xl font-serif text-amber-300">Access Crate</p>
        <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold rounded-full px-2.5 py-0.5">
          Beta
        </span>
      </div>{" "}
      <div className="p-4 border-t border-gray-100">
        <p className="text-md text-gray-900 font-semibold mb-2">Access Crate</p>
        <p className="text-sm text-gray-500 mb-4">
          A full-stack Event ticketing and management system.
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
      </div>
    </CardWrapper>
  );
};
