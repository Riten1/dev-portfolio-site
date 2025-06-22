"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface NavContextType {
  navName: string;
  setNavName: (name: string) => void;
}

const navContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [navName, setNavName] = useState<string>("Home");

  return (
    <navContext.Provider value={{ navName, setNavName }}>
      {children}
    </navContext.Provider>
  );
};

export const useNavContext = () => {
  const context = useContext(navContext);

  if (context === undefined) {
    return {
      navName: "Home",
      setNavName: () => {},
    };
  }

  return context;
};
