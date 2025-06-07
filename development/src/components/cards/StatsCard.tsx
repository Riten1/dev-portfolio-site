import React from "react";
import { CardWrapper } from "../CardWrapper";

export const StatsCard = () => {
  return (
    <CardWrapper className="bg-gradient-to-br h-full from-green-400 to-blue-500 w-full">
      <div className="p-6 h-full text-white">
        <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm opacity-80">Projects</span>
            <span className="text-2xl font-bold">3</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm opacity-80">Clients</span>
            <span className="text-2xl font-bold">3</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm opacity-80">Coffee Cups</span>
            <span className="text-2xl font-bold">1</span>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
