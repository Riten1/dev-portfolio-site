"use client";
import { Octokit } from "@octokit/core";
import React, { useEffect, useState, useMemo } from "react";
import { CardWrapper } from "../../CardWrapper";
import { Github } from "lucide-react";
import { IGithubUser } from "@/@types/github";

export const GithubCard = () => {
  // Move octokit inside useMemo to prevent recreating on every render
  const octokit = useMemo(
    () =>
      new Octokit({
        auth: process.env.GITHUB_ACCESS_TOKEN,
      }),
    []
  );

  const [githubData, setGithubData] = useState<IGithubUser | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await octokit.request("GET /users/{username}", {
          username: `${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });

        const userData: IGithubUser = {
          ...response.data,
          name: response.data.name || response.data.login,
          created_at: new Date(response.data.created_at),
          updated_at: new Date(response.data.updated_at),
          bio: response.data.bio || "",
          blog: response.data.blog || "",
          hireable: response.data.hireable || false,
        } as IGithubUser;

        setGithubData(userData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    })();
  }, [octokit]);

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
            <p className="lg:text-xs opacity-60 text-[10px]">
              {githubData?.followers} followers
            </p>
            <p className="lg:text-xs text-[10px] opacity-60">
              {githubData?.following} following
            </p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
