"use client";
import React from "react";
import { CardWrapper } from "../CardWrapper";
import { Badge } from "../ui/Badge";
import { useModal } from "../ui/AnimatedModal";

export const ExprienceCard = () => {
  const { setActiveModal } = useModal();
  return (
    <CardWrapper
      className="bg-orange-500 w-full text-white"
      onClick={() => setActiveModal("experience")}
    >
      <div className="p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Experience</h3>
          <Badge name="1+ year"></Badge>
        </div>
        <p className="text-sm mb-2">Technical Support Engineer at Enriman</p>
        <p className="text-xs opacity-90 mb-2">
          Contributed in Enirman admin project
        </p>
        <p className="text-xs opacity-80">@ Enirman</p>
      </div>{" "}
    </CardWrapper>
  );
};
