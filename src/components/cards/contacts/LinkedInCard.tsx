import { CardWrapper } from "@/components/CardWrapper";
import { Linkedin } from "lucide-react";
import React from "react";

export const LinkedInCard = () => {
  return (
    <CardWrapper
      className="bg-gray-800 text-white"
      onClick={() =>
        window.open("https://www.linkedin.com/in/riten-gurung-29708225a/")
      }
    >
      <div className="p-6 h-full flex flex-col justify-between">
        <Linkedin className="w-6 h-6" />
        <div>
          <p className="text-sm font-medium">LinkedIn</p>
          <p className="text-xs opacity-80">@riten-gurung</p>
          <div className="flex gap-2">
            <p className="text-xs opacity-60">200+ followers</p>
            <p className="text-xs opacity-60">200+ connections</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
