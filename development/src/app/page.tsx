import { AboutCard } from "@/components/cards/AboutCard";
import { AvatarCard } from "@/components/cards/AvatarCard";
import { ConnectCard } from "@/components/cards/contacts/ConnectCard";
import { GithubCard } from "@/components/cards/contacts/GithubCard";
import { LinkedInCard } from "@/components/cards/contacts/LinkedInCard";
import { WhatsappCard } from "@/components/cards/contacts/WhatsappCard";
import { ExprienceCard } from "@/components/cards/ExprienceCard";
import { LocationCard } from "@/components/cards/LocationCard";
import { MusicCard } from "@/components/cards/MusicCard";
import { AccessCrateCard } from "@/components/cards/projects/AccessCrateCard";
import { EnirmanCard } from "@/components/cards/projects/EnirmanCard";
import { RollcorCard } from "@/components/cards/projects/RollcorCard";
import { SkillsCard } from "@/components/cards/SkillsCard";
import { StatsCard } from "@/components/cards/StatsCard";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <BackgroundLines className="h-full">
      <div className="overflow-visible flex flex-col gap-4 lg:px-44 pt-28 pb-16 md:px-20 px-8">
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
          <EnirmanCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4 h-full">
            <div className="grid grid-cols-2 gap-4">
              <LinkedInCard />
              <WhatsappCard />
            </div>
            <ExprienceCard />
          </div>

          <div className="h-full grid grid-cols-2 gap-4">
            <AccessCrateCard />
            <RollcorCard />
          </div>
        </div>
      </div>
      <div className="border border-t border-gray-100 flex gap-4 items-center justify-center">
        <div className="font-bold text-gray-900 cursor-pointer">RG</div>

        <p className="text-center py-8 text-md">
          © {new Date().getFullYear()} Riten Gurung All Rights Reserved.
        </p>
      </div>
    </BackgroundLines>
  );
}
