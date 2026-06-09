"use client";

import { useRef, useEffect } from "react";

export default function AboutVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.currentTime = 1;
    video.play().catch(() => {});
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.15) {
        video.currentTime = 1;
        video.play().catch(() => {});
      }
    };
    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <div className="w-full aspect-square overflow-hidden">
      <video
        ref={ref}
        src="/videos/about-reel.webm"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
}
