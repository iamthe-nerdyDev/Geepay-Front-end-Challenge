import React from "react";

const TrendUp: React.FC<SvgProps> = ({ width, height, className, fill }) => {
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
        d="M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      ></path>
      <path
        stroke={fill || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.17 12l-.47-.7-3.2 3.2M16.5 9.5l-1.51 1.51L14 12M14.5 9.5h2v2"
      ></path>
    </svg>
  );
};

export default TrendUp;
