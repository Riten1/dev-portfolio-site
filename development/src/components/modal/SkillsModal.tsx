"use client";
import React from "react";
import { ModalBody, useModal } from "../ui/AnimatedModal";

const frontendSkills = [
  { name: "React.js", percent: 95, color: "bg-cyan-500" },
  { name: "Axios", percent: 95, color: "bg-green-500" },
  { name: "Tailwind CSS", percent: 95, color: "bg-sky-400" },
  { name: "Javascript", percent: 90, color: "bg-yellow-400" },
  { name: "Typescript", percent: 90, color: "bg-blue-600" },
  { name: "Redux Toolkit", percent: 90, color: "bg-purple-500" },
  { name: "React Query", percent: 85, color: "bg-pink-500" },
  { name: "Next.js", percent: 80, color: "bg-gray-700" },
  { name: "Bootstrap", percent: 60, color: "bg-indigo-600" },
  { name: "Socket.io", percent: 40, color: "bg-gray-700" },
];

const backendSkills = [
  { name: "Node.js", percent: 90, color: "bg-green-600" },
  { name: "Express.js", percent: 85, color: "bg-gray-900" },
  { name: "MongoDB", percent: 85, color: "bg-green-800" },
  { name: "Postman", percent: 85, color: "bg-orange-500" },
  { name: "Mongoose", percent: 80, color: "bg-teal-700" },
  { name: "TypeORM", percent: 40, color: "bg-blue-800" },
  { name: "Nest.js", percent: 30, color: "bg-red-600" },
  { name: "PostgreSQL", percent: 30, color: "bg-indigo-800" },
];

const animationAndUI = [
  { name: "Framer Motion", percent: 90, color: "bg-pink-600" },
  { name: "Headless UI", percent: 85, color: "bg-neutral-500" },
  { name: "Mantine", percent: 80, color: "bg-blue-400" },
  { name: "Shadcn", percent: 75, color: "bg-purple-700" },
  { name: "Acertinity UI", percent: 70, color: "bg-emerald-500" },
];

const versionControlSkills = [
  { name: "Git", percent: 90, color: "bg-orange-400" },
  { name: "GitHub", percent: 88, color: "bg-gray-800" },
];

type SkillItem = {
  name: string;
  percent: number;
  color: string;
};

type SkillCardProps = {
  title: string;
  skills: SkillItem[];
};

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="p-4 bg-white/20 rounded-md backdrop-blur-md shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
      <div className="space-y-3">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm text-white/80 mb-1">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded">
              <div
                className={`h-2 rounded ${skill.color}`}
                style={{ width: `${skill.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SkillsModal = () => {
  const { activeModal } = useModal();

  if (activeModal !== "skills") return null;

  return (
    <div className="custom-scrollbar  w-full h-full max-w-5xl md:rounded-xl bg-pink-500 text-white overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCard title="Frontend" skills={frontendSkills} />
        <SkillCard title="Backend" skills={backendSkills} />
        <SkillCard title="UI & Animation" skills={animationAndUI} />
        <SkillCard title="Version Control" skills={versionControlSkills} />
      </div>
    </div>
  );
};
