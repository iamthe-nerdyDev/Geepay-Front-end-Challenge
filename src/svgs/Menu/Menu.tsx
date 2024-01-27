import React from "react";

const Menu: React.FC<SvgProps> = ({ width, height, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width || 20}
      height={height || 20}
      viewBox="0 0 24 24"
      className={className}
    >
      <g>
        <g>
          <path
            stroke={fill || "currentColor"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5 17h8m-8-5h14m-8-5h8"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default Menu;
