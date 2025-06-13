"use client";

import { useNavContext } from "@/context/navContext";
import {
  BriefcaseIcon,
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  StarIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import { MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setNavName } = useNavContext();

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[90%] md:max-w-fit">
      <div className="bg-white/80 backdrop-blur-md border-0 shadow-lg rounded-lg px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-gray-900 cursor-pointer mr-6">RG</div>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>

          <div className="hidden md:flex space-x-8">
            <NavButtons setNavName={setNavName} />
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 flex flex-col space-y-4 md:hidden">
            <NavButtons setNavName={setNavName} />
          </div>
        )}
      </div>
    </nav>
  );
};

const navItems = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Work",
    icon: BriefcaseIcon,
  },
  {
    name: "About",
    icon: UserCircleIcon,
  },
  {
    name: "Experience",
    icon: StarIcon,
  },
  {
    name: "Contact",
    icon: ChatBubbleBottomCenterIcon,
  },
];

const NavButtons = ({ setNavName }: { setNavName: any }) => (
  <>
    {navItems.map((item) => (
      <button
        onClick={() => {
          setNavName(item.name);
        }}
        key={item.name}
        className="cursor-pointer flex items-center text-gray-800 hover:text-black"
      >
        <item.icon className="w-4 h-4 mr-1" />
        {item.name}
      </button>
    ))}
  </>
);
