"use client";
import React, { useEffect, useState } from "react";
import { BookOpen, Ruler, Globe, PenTool, Calculator, Microscope } from "lucide-react";

const AnimatedBackground = () => {
  const iconData = [
    { Icon: BookOpen, delay: "0s", duration: "20s" },
    { Icon: Ruler, delay: "2s", duration: "25s" },
    { Icon: Globe, delay: "4s", duration: "30s" },
    { Icon: PenTool, delay: "6s", duration: "22s" },
    { Icon: Calculator, delay: "8s", duration: "28s" },
    { Icon: Microscope, delay: "10s", duration: "24s" },
  ];

  const [icons, setIcons] = useState<
    { Icon: any; delay: string; duration: string; left: string; top: string }[]
  >([]);

  useEffect(() => {
    const generatedIcons = iconData.map((item) => ({
      ...item,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setIcons(generatedIcons);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((item, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-10 dark:opacity-5"
          style={{
            left: item.left,
            top: item.top,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        >
          <item.Icon className="h-8 w-8 text-purple-400 dark:text-purple-500" />
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
