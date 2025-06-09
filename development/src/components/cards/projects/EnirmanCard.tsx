"use client";
import { CardWrapper } from "@/components/CardWrapper";
import React from "react";
import enirmanLogo from "../../../../public/EnrimanLogo.png";
import Image from "next/image";
import { AwardIcon } from "lucide-react";

const techStacks: string[] = [
  "Typescript",
  "React.js",
  "React Query",
  "Socket.io",
  "Axios",
  "Framer Motion",
  "Redux Toolkit",
  "Tailwind CSS",
];

export const EnirmanCard = () => {
  return (
    <CardWrapper
      className=" h-full bg-white shadow-xl w-full border border-gray-100"
      onClick={() => window.open("https://app.enirman.com/")}
    >
      <div className="h-1/3 items-center justify-center flex relative">
        <Image src={enirmanLogo} alt="logo" className="w-1/2 object-contain" />
        <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold rounded-full px-2.5 py-0.5">
          Live
        </span>
      </div>
      <div className="p-6 border-t border-gray-100">
        <p className="text-lg text-gray-900 font-semibold mb-2">
          Enirman Admin
        </p>
        <p className="text-sm text-gray-500 mb-2">
          Saas based construction management system for construction companies.
        </p>
        <div>
          <div
            className="mb-3 p-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
            onClick={() =>
              window.open(
                "https://www.facebook.com/photo/?fbid=1185178886396254&set=a.729101102004037"
              )
            }
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">
                <AwardIcon className="w-6 h-6 text-amber-800" />
              </span>
              <div>
                <p className="text-sm font-semibold text-yellow-800">
                  ICT Award Nepal 2024
                </p>
                <p className="text-xs text-yellow-700">
                  Top 5 Finalist • Product Category
                </p>
              </div>
            </div>
          </div>
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
      </div>
    </CardWrapper>
  );
};
