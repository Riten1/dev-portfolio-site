"use client";

import React, { useEffect, useRef, useState } from "react";
import { CardWrapper } from "../CardWrapper";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { audio } from "motion/react-client";

export const MusicCard = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(audioRef.current?.currentTime || 0);
    };

    const setAudioDuration = () => {
      setDuration(audioRef.current?.duration || 0);
    };

    audioRef.current?.addEventListener("timeupdate", updateTime);
    audioRef.current?.addEventListener("loadedmetadata", setAudioDuration);
    return () => {
      audioRef.current?.removeEventListener("timeupdate", updateTime);
      audioRef.current?.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [toggleMute, togglePlay]);

  return (
    <CardWrapper className="bg-indigo-500 p-6">
      <audio loop ref={audioRef} src="/music.mp3" />
      <div className="text-white h-full flex flex-col justify-between gap-4">
        <div className="flex items-center justify-between">
          <Music className="w-6 h-6 opacity-80" />
          <button
            className="w-8 flex justify-center items-center hover:cursor-pointer h-8 p-2 text-white hover:bg-white/20 hover:rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </button>
        </div>
        <div>
          <p className="text-sm font-medium">Come Away With Me</p>
          <p className="text-xs opacity-80">Norah Jones</p>
          <p className="text-xs opacity-60">{formatTime(currentTime)}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full bg-white/20 rounded-full h-1 mr-2">
            <div
              className="bg-white h-1 rounded-full transition-all duration-300"
              style={{
                width: `${(currentTime / 194.448028) * 100}%
                `,
              }}
            />
          </div>
          <button
            className="w-8 flex justify-center items-center hover:cursor-pointer h-8 p-2 text-white hover:bg-white/20 hover:rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </CardWrapper>
  );
};
