"use client";
import { Octokit } from "@octokit/core";
import React, { use, useEffect, useState } from "react";
import { CardWrapper } from "../../CardWrapper";
import { Github } from "lucide-react";
import { IGithubUser } from "@/@types/github";

export const GithubCard = () => {
  const octokit: Octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  });

  const [githubData, setGithubData] = useState<IGithubUser>();

  useEffect(() => {
    (async () => {
      const response = await octokit.request("GET /users/{username}", {
        username: `${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      setGithubData(response.data);
    })();
  }, []);
  return (
    <CardWrapper
      className="bg-gray-800 text-white"
      onClick={() => {
        window.open(
          `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
        );
      }}
    >
      <div className="p-6 h-full flex flex-col justify-between">
        <Github className="w-6 h-6" />
        <div>
          <p className="text-sm font-medium">GitHub</p>
          <p className="text-xs opacity-80">@{githubData?.name}</p>
          <div className="flex gap-2">
            <p className="text-xs opacity-60">
              {githubData?.followers} followers
            </p>
            <p className="text-xs opacity-60">
              {githubData?.following} following
            </p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
