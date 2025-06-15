"use client";
import React from "react";
import { useModal } from "../ui/AnimatedModal";

const experiences = [
  {
    role: "Technical Support",
    company: "Enirman, Pokhara, Nepal",
    duration: "April 2025 – June 2025",
    responsibilities: [
      "Assisted clients with technical issues and feature requests.",
      "Managed tasks using Jira and GitHub Projects.",
      "Designed and executed test cases for various features.",
      "Created and tracked feature and bug tickets.",
      "Communicated feature details with clients and developers.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "Yeti Labs, Pokhara, Nepal",
    duration: "October 2024 – March 2025",
    responsibilities: [
      "eNirman admin site development.",
      "Engaged in daily stand-ups and sprint planning sessions.",
      "Collaborated with senior developers to maintain web app (React.js).",
      "Used React Query for data fetching and mutations.",
      "Implemented sockets for real-time chat.",
      "Built reusable components for optimization.",
      "Used Headless UI and Framer Motion for UI/animation.",
      "Worked with UI/UX teams to enhance user experience.",
      "Assisted in deploying the site via GitHub.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Yeti Labs, Pokhara, Nepal",
    duration: "July 2024 – September 2024",
    responsibilities: [
      "Gained hands-on experience with TypeScript and Next.js.",
      "Learned production-level folder structure and routing.",
      "Used project management tools like Jira and Notion.",
      "Adapted to professional work environments and schedules.",
    ],
  },
];

export const ExperienceModal = () => {
  const { activeModal } = useModal();
  if (activeModal !== "experience") return null;

  return (
    <div className=" custom-scrollbar  w-full h-full max-w-4xl md:rounded-xl bg-orange-500 text-white overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
      <div className="relative border-l-4 border-white/20 pl-6 space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-5 top-1.5 w-4 h-4  rounded-full bg-white" />
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm opacity-90">{exp.company}</p>
              <p className="text-sm italic opacity-70">{exp.duration}</p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1 opacity-90">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
