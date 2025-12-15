"use client";

import React, { useState, useEffect, useRef } from "react";

export default function FlipboardTimer({
  startMinutes,
}: {
  startMinutes: number;
}) {
  const [initialMinutes, setInitialMinutes] = useState(startMinutes);
  const [timeLeft, setTimeLeft] = useState(startMinutes * 60); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(true);

  // Format time into individual digits
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return {
      minuteTens: Math.floor(mins / 10),
      minuteOnes: mins % 10,
      secondTens: Math.floor(secs / 10),
      secondOnes: secs % 10,
    };
  };

  const { minuteTens, minuteOnes, secondTens, secondOnes } =
    formatTime(timeLeft);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      // Auto reset and continue
      setTimeLeft(initialMinutes * 60);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, initialMinutes]);

  return (
    <div className="w-fit flex items-center justify-center ">
      <div className="w-fit ">
          <div className="flex justify-center ">
            <span className="text-black text-xs font-medium">SLOT ENDS IN</span>
          </div>
        {/* Timer Display */}
        <div className="">
          <div className="flex items-center justify-center ">
            {/* Minutes */}
            <div className="flex">
              <FlipDigit digit={minuteTens} />
              <FlipDigit digit={minuteOnes} />
            </div>

            {/* Separator */}
            <div className="text-sm font-bold text-black animate-pulse">:</div>

            {/* Seconds */}
            <div className="flex">
              <FlipDigit digit={secondTens} />
              <FlipDigit digit={secondOnes} />
            </div>
          </div>

          {/* Labels */}
        </div>
      </div>
    </div>
  );
}

interface FlipDigitProps {
  digit: number;
  className?: string;
}

const FlipDigit: React.FC<FlipDigitProps> = ({ digit, className = "" }) => {
  const [currentDigit, setCurrentDigit] = useState(digit);
  const [nextDigit, setNextDigit] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (digit !== currentDigit) {
      setNextDigit(digit);
      setIsFlipping(true);

      const timeout = setTimeout(() => {
        setCurrentDigit(digit);
        setIsFlipping(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [digit, currentDigit]);

  

  return (
    <div className={`relative w-[20px] h-[20px] ${className}`}>
      <div className="w-full h-full ">
        <div
          className={`flip-card-inner !rounded-none`}
          style={{
            transition: "transform 1s",
            transform: isFlipping ? "rotateX(180deg)" : "rotateX(0deg)",
          }}
        >
          {/* Front face */}
          <div className="flip-card-front absolute inset-0 flex items-center justify-center bg-gray-900 text-white ">
            <span>{currentDigit}</span>
          </div>
          {/* Back face */}
          <div className="flip-card-back absolute inset-0 flex items-center justify-center bg-gray-800 text-white " style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}>
            <span>{nextDigit}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
