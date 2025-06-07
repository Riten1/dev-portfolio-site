import React from "react";
import { CardWrapper } from "../CardWrapper";

export const AvatarCard = () => {
  return (
    <CardWrapper className="h-full w-1/2 p-12 bg-yellow-400 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="relative bg-white w-20 h-20 flex justify-center items-center rounded-full animate-bounce">
          <p className="text-3xl">👨‍💻</p>
          <span className="bg-green-600 animate-pulse w-6 h-6 absolute top-0 right-0 rounded-full">
            <span className="bg-white w-2 h-2 flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
          </span>
        </div>
        <div>
          <p className="text-[12px] text-white font-semibold">
            Available for work.
          </p>
          <p className="text-xs text-center text-white/70"> Contact Me</p>
        </div>
      </div>
    </CardWrapper>
  );
};
