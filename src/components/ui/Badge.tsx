import React from "react";

export const Badge = ({ name }: { name: string }) => {
  return (
    <span className="bg-white/25 text-white text-xs font-semibold rounded-full px-2.5 py-0.5">
      {name}
    </span>
  );
};
