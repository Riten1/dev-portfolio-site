import React from "react";
import { CardWrapper } from "../CardWrapper";
import { useNavContext } from "@/context/navContext";

export const AvatarCard = () => {
  const { setNavName } = useNavContext();
  return (
    
    <CardWrapper
      className="w-full sm:w-1/2 p-6 sm:p-8 md:p-12 bg-yellow-400 flex justify-center items-center"
      onClick={() => setNavName("Contact")}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="relative bg-white w-16 h-16 sm:w-20 sm:h-20 flex justify-center items-center rounded-full animate-bounce">
          <p className="text-2xl sm:text-3xl">👨‍💻</p>
          <span className="bg-green-600 animate-pulse w-4 h-4 sm:w-6 sm:h-6 absolute top-0 right-0 rounded-full">
            <span className="bg-white w-1.5 h-1.5 sm:w-2 sm:h-2 flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
          </span>
        </div>
        <div className="text-center">
          <p className="text-[11px] sm:text-[12px] text-white font-semibold">
            Available for work.
          </p>
          <p className="text-[10px] sm:text-xs text-white/70">Contact Me</p>
        </div>
      </div>
    </CardWrapper>
  );
};
