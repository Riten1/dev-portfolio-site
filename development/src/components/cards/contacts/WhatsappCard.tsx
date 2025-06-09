import { CardWrapper } from "@/components/CardWrapper";
import { PhoneIcon } from "lucide-react";
import React from "react";

export const WhatsappCard = () => {
  return (
    <CardWrapper className="bg-gray-800 text-white">
      <div className="p-6 h-full flex flex-col gap-24">
        <PhoneIcon className="w-6 h-6" />
        <div>
          <p className="text-sm font-medium">Whatsapp</p>
          <p className="text-xs opacity-80">+977 9826127253</p>
          <div className="flex gap-2">
            <p className="text-xs opacity-60"></p>
            <p className="text-xs opacity-60"></p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
