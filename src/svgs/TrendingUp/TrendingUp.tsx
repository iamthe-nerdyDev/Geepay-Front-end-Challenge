import React from "react";

const TrendingUp: React.FC<SvgProps> = ({ width, height, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 10}
      height={height || 6}
      fill="none"
      viewBox="0 0 10 6"
      className={className}
    >
      <path
        stroke={fill || "#34CAA5"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M.5 5.5l3-3 2 2 4-4"
      ></path>
      <path stroke="#34CAA5" strokeLinecap="round" strokeLinejoin="round" d="M6 .5h3.5V4"></path>
    </svg>
  );
};

export default TrendingUp;
