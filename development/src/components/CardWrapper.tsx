import React from "react";

export const CardWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative overflow-visible inline-block transition-all rounded-lg duration-500 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};
