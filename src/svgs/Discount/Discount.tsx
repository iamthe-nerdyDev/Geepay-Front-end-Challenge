import React from "react";

const Discount: React.FC<SvgProps> = ({ width, height, className, fill }) => {
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
        d="M14.66 20.01l-1.52 1.52c-.62.62-1.64.62-2.26 0l-1.52-1.52c-.26-.26-.77-.47-1.13-.47H6.08c-.88 0-1.6-.72-1.6-1.6v-2.15c0-.36-.21-.87-.47-1.13l-1.52-1.52c-.62-.62-.62-1.64 0-2.26l1.52-1.52c.26-.26.47-.77.47-1.13V6.08c0-.88.72-1.6 1.6-1.6M9.34 3.99l1.52-1.52c.62-.62 1.64-.62 2.26 0l1.52 1.52c.26.26.77.47 1.13.47h2.15c.88 0 1.6.72 1.6 1.6v2.15c0 .36.21.87.47 1.13l1.52 1.52c.62.62.62 1.64 0 2.26l-1.52 1.52c-.26.26-.47.77-.47 1.13v2.15c0 .88-.72 1.6-1.6 1.6M9 15l6-6"
      ></path>
      <path
        stroke={fill || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.495 14.5h.009M9.495 9.5h.008"
      ></path>
    </svg>
  );
};

export default Discount;
