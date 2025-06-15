"use client";
import { createContext, useContext, useState } from "react";

const navContext = createContext({
  navName: "Home",
  setNavName: (name: string) => {
    console.log(name);
  },
});

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [navName, setNavName] = useState("Home");
  return (
    <navContext.Provider value={{ navName, setNavName }}>
      {children}
    </navContext.Provider>
  );
};

export const useNavContext = () => useContext(navContext);
