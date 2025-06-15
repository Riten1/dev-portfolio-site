"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { CardWrapper } from "../CardWrapper";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";

export const MusicCard = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Wrap togglePlay in useCallback to prevent dependency changes
  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Wrap toggleMute in useCallback to prevent dependency changes
  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;

    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  }, [isMuted]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const audioElement = audioRef.current; // Copy ref to variable for cleanup

    const updateTime = () => {
      setCurrentTime(audioElement?.currentTime || 0);
    };

    const setAudioDuration = () => {
      setDuration(audioElement?.duration || 0);
    };

    audioElement?.addEventListener("timeupdate", updateTime);
    audioElement?.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audioElement?.removeEventListener("timeupdate", updateTime);
      audioElement?.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []); // Remove dependencies since they're not actually needed

  return (
    <CardWrapper className="bg-indigo-500 p-6 w-full">
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
                width: `${(currentTime / 194.448028) * 100}%`,
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
