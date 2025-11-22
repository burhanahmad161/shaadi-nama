'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function SoundPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize audio once
  useEffect(() => {
    if (typeof window !== "undefined" && !audioRef.current) {
      audioRef.current = new Audio('Assets/audio1.mp3');
      audioRef.current.loop = true; // Optional if you want continuous play
    }

    // Try autoplay on mount
    const tryPlay = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        // Autoplay blocked — will play on click
        setIsPlaying(false);
      }
    };

    tryPlay();
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      {isPlaying ? (
        <Volume2
          onClick={toggleAudio}
          className="w-10 h-10 text-rose-700 cursor-pointer hover:scale-110 transition"
        />
      ) : (
        <VolumeX
          onClick={toggleAudio}
          className="w-10 h-10 text-rose-700 cursor-pointer hover:scale-110 transition"
        />
      )}
    </div>
  );
}
