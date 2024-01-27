import React from "react";

const TrendingDown: React.FC<SvgProps> = ({ width, height, className, fill }) => {
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
        stroke={fill || "#ED544E"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M.5.5l3 3 2-2 4 4"
      ></path>
      <path stroke="#ED544E" strokeLinecap="round" strokeLinejoin="round" d="M6 5.5h3.5V2"></path>
    </svg>
  );
};

export default TrendingDown;
