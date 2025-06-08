import { AboutCard } from "@/components/cards/AboutCard";
import { AvatarCard } from "@/components/cards/AvatarCard";
import { ConnectCard } from "@/components/cards/ConnectCard";
import { GithubCard } from "@/components/cards/GithubCard";
import { LocationCard } from "@/components/cards/LocationCard";
import { MusicCard } from "@/components/cards/MusicCard";
import { SkillsCard } from "@/components/cards/SkillsCard";
import { StatsCard } from "@/components/cards/StatsCard";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";

export default function Home() {
  return (
    <BackgroundLines>
      <div className="overflow-visible flex flex-col gap-4 lg:px-44 pt-28 md:px-20 px-8">
        <div className="flex gap-4 ">
          <AboutCard />
          <div className="flex flex-col gap-4 w-1/2">
            <div className="flex gap-4">
              <AvatarCard />
              <StatsCard></StatsCard>
            </div>
            <SkillsCard />
          </div>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-2 gap-4">
          <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-2 gap-4">
            <MusicCard />
            <LocationCard />
            <ConnectCard />
            <GithubCard />
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
}
