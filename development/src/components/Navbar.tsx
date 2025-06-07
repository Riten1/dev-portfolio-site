import { BriefcaseIcon, HomeIcon } from "@heroicons/react/16/solid";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-md border-0 shadow-lg rounded-lg">
        <div className="px-8 py-4">
          <div className="flex items-center space-x-6">
            <div className="font-bold text-gray-900 cursor-pointer">RG</div>
            <div className="flex space-x-8">
              <button className="flex items-center">
                <HomeIcon className="w-4 h-4 mr-1" />
                Home
              </button>
              <button className="flex items-center">
                <BriefcaseIcon className="w-4 h-4 mr-1" />
                Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
