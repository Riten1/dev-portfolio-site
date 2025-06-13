import React from "react";
import { CardWrapper } from "../CardWrapper";
import { Badge } from "../ui/Badge";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { useModal } from "../ui/AnimatedModal";

export const SkillsCard = () => {
  const skills = [
    "Javascript",
    "Typescript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Nest.js",
    "TypeORM",
    "MongoDB",
    "Mongoose",

    "Tailwind CSS",
    // "Git",
    // "GitHub",
  ];

  const { setActiveModal } = useModal();
  return (
    <CardWrapper
      className="bg-pink-500 p-6 h-full w-full"
      onClick={() => {
        setActiveModal("skills");
      }}
    >
      <div className="flex flex-col gap-6">
        <p className="text-lg font-semibold text-white">
          Skills and Technologies
        </p>
        {
          <div className="flex items-center flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} name={skill} />
            ))}
            <Badge name=". . ."></Badge>
          </div>
        }
      </div>
    </CardWrapper>
  );
};
