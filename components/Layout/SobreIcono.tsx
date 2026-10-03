import React from "react";

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
  fillColor?: string;
}

export default function SobreIcono({
  className,
  size = 48,
  color = "#1E293B",
  fillColor = "#FFFFFF",
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      className={className}
    >
      {/* Cuerpo Base */}
      <rect
        x="10"
        y="26"
        width="80"
        height="56"
        rx="12"
        fill={fillColor}
        stroke={color}
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Solapa Superior */}
      <path
        d="M 10 38 L 50 14 L 90 38"
        fill={fillColor}
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pliegue Interior */}
      <path
        d="M 12 38 L 50 62 L 88 38"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}