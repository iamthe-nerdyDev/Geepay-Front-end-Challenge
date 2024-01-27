import React from "react";

const Vector: React.FC<SvgProps> = ({ width, height, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 3}
      height={height || 21}
      fill="none"
      viewBox="0 0 3 21"
      className={className}
    >
      <path
        fill={fill || "currentColor"}
        d="M0 3.025A2.658 2.658 0 013 .39V21a3 3 0 01-3-3V3.025z"
      ></path>
    </svg>
  );
};

export default Vector;
