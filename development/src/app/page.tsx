import { AboutCard } from "@/components/cards/AboutCard";
import { AvatarCard } from "@/components/cards/AvatarCard";
import { SkillsCard } from "@/components/cards/SkillsCard";
import { StatsCard } from "@/components/cards/StatsCard";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";

export default function Home() {
  return (
    <BackgroundLines className="">
      <div className="flex gap-4 lg:px-44 pt-28 md:px-20 px-8">
        <AboutCard />
        <div className="flex flex-col gap-4 w-1/2">
          <div className="flex gap-4">
            <AvatarCard />
            <StatsCard></StatsCard>
          </div>
          <SkillsCard />
        </div>
      </div>
    </BackgroundLines>
  );
}
