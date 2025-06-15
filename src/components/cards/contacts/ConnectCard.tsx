"use client";
import { Send } from "lucide-react";
import React from "react";
import { CardWrapper } from "../../CardWrapper";

export const ConnectCard = () => {
  return (
    <CardWrapper className="bg-red-500 text-white">
      <div className="p-6 h-full flex flex-col justify-between">
        <div>
          <h3 className="font-semibold mb-2">Let&apos;s Connect</h3>
          <p className="text-sm opacity-90 mb-2">Ready to work together?</p>
          <p className="text-xs opacity-80">griten186@gmail.com</p>
          <p className="text-xs opacity-80">+977 9826127253</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = `mailto: griten186@gmail.com`;
          }}
          className="mt-6 lg:text-[16px] text-[14px] flex justify-center items-center cursor-pointer w-full lg:px-6 md:px-6 px-2 py-2 border border-black bg-transparent text-black dark:border-white relative group transition duration-200"
        >
          <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
          <Send className="w-4 h-4 mr-2" />
          <span className="relative text-center"> Say Hello</span>
        </button>
      </div>
    </CardWrapper>
  );
};
