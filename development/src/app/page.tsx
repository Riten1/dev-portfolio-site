"use client";
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
import { useNavContext } from "@/context/navContext";

export default function Home() {
  const { navName } = useNavContext();
  console.log(navName);
  const renderHome = () => (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <AboutCard />
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div className="flex flex-row sm:flex-row gap-4">
            <AvatarCard />
            <StatsCard />
          </div>
          <SkillsCard />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-4">
          <MusicCard />
          <LocationCard />
          <ConnectCard />
          <GithubCard />
        </div>
        <EnirmanCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <LinkedInCard />
            <WhatsappCard />
          </div>
          <ExprienceCard />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AccessCrateCard />
          <RollcorCard />
        </div>
      </div>
    </>
  );

  const renderWork = () => (
    <>
      <div className="grid grid-cols-1 gap-4 h-full">
        <EnirmanCard />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <AccessCrateCard />
          <RollcorCard />
        </div>
      </div>
    </>
  );

  const renderAbout = () => (
    <div className="flex flex-col lg:flex-row gap-4">
      <AboutCard />
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <div className="flex flex-row sm:flex-row gap-4">
          <AvatarCard />
          <StatsCard />
        </div>
        <div className="flex gap-4">
          <LocationCard />
          <MusicCard />
        </div>
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="flex flex-col gap-4">
      <SkillsCard />
      <ExprienceCard />
    </div>
  );

  const renderContact = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <ConnectCard />
      <GithubCard />
      <LinkedInCard />
      <WhatsappCard />
    </div>
  );

  const renderCards = () => {
    switch (navName) {
      case "Home":
        return renderHome();
      case "Work":
        return renderWork();
      case "About":
        return renderAbout();
      case "Experience":
        return renderExperience();
      case "Contact":
        return renderContact();
      default:
        return renderHome();
    }
  };
  return (
    <BackgroundLines className="h-full">
      <div className="flex flex-col justify-between items-center h-full">
        <div className="overflow-visible flex flex-col gap-4 lg:px-44 pt-28 pb-16 md:px-20 px-4 sm:px-6">
          {renderCards()}
        </div>
        <div className="border-t bottom-0 border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-2 py-6 text-center">
          <div className="font-bold text-gray-900 cursor-pointer">RG</div>
          <p className="text-md">
            © {new Date().getFullYear()} Riten Gurung All Rights Reserved.
          </p>
        </div>
      </div>
    </BackgroundLines>
  );
}
