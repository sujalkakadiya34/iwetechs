import React, { useEffect, useState } from "react";

export default function ProgressCircle({ percentage, label, delay }) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start > percentage) {
        clearInterval(interval);
      } else {
        setProgress(start);
      }
    }, delay); // different speed per circle
    return () => clearInterval(interval);
  }, [percentage, delay]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="progressCircleBox">
      <svg width="150" height="150">
        <defs>
          {/* Gradient definition */}
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0676be" />
            <stop offset="100%" stopColor="#20ace3" />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="#eee"
          strokeWidth="12"
          fill="none"
        />

        {/* Progress Circle */}
        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="url(#gradientStroke)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 75 75)"
        />
      </svg>
      <div className="progressCircleText">{progress}%</div>
      <p className="progressCircleLabel">{label}</p>
    </div>
  );
}
