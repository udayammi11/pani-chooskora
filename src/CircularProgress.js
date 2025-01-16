import React, { useState, useEffect } from "react";

const CircularProgress = ({ duration = 60 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, (duration * 1000) / 100); // Updates every 1% of total duration

    return () => clearInterval(interval);
  }, [duration]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      {/* Background Circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#ddd"
        strokeWidth="10"
        fill="none"
      />
      
      {/* Progress Circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#007bff"
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)" // Start from top
      />

      {/* Timer Label */}
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20px">
        {Math.ceil((duration * (100 - progress)) / 100)}s
      </text>
    </svg>
  );
};

export default CircularProgress;