import { AboutCard } from "@/components/cards/AboutCard";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";

export default function Home() {
  return (
    <BackgroundLines className="">
      <div className="flex gap-4 px-8">
        <AboutCard />
        <p>Hi</p>
      </div>
    </BackgroundLines>
  );
}
