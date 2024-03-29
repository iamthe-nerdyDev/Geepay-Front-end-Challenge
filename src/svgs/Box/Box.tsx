import React from "react";

const Box: React.FC<SvgProps> = ({ width, height, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke={fill || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.17 7.44L12 12.55l8.77-5.08M12 21.61v-9.07"
      ></path>
      <path
        stroke={fill || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2.39 9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.97c1.14-.63 3.01-.63 4.15 0l5.34 2.97c1.21.67 2.2 2.35 2.2 3.73v5.65c0 1.38-.99 3.06-2.2 3.73l-5.34 2.97c-1.14.63-3.01.63-4.15 0l-5.34-2.97c-1.21-.67-2.2-2.35-2.2-3.73V14"
      ></path>
      <path
        stroke={fill || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 13.24V9.58l-6.07-3.51-1.05-.6L7.51 4.1"
      ></path>
    </svg>
  );
};

export default Box;
