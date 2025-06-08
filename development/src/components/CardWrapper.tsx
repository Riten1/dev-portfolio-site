import React from "react";

export const CardWrapper = ({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-visible inline-block transition-all rounded-lg duration-500 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};
