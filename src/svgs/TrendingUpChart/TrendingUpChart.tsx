import React from "react";

const TrendingUpChart: React.FC<SvgProps> = ({ width, height, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 106}
      height={height || 33}
      fill="none"
      viewBox="0 0 106 33"
      className={className}
    >
      <path
        fill="url(#paint0_linear_2132_4599)"
        fillOpacity="0.16"
        d="M102.994 8.467H105V33H1V11.454l3.009 7.466 1.195 2.987h1.402l2.802-2.987 1.962 2.987h5.886l3.083-2.987 1.682-4.48 2.447 2.24 2.207 2.24.689 3.413 1.401-.426h1.72l3.21-10.453 1.003 2.986 1.605-2.986 1.203 5.226 3.21-8.96 1.805 3.734h3.41l3.61-7.467 2.207 3.733 2.906-2.24 3.54 5.973L60.47 1l1.648 10.453 10.99 4.48 1.403-2.986h1.404l3.21-4.48h3.209l1.203 4.48 4.814-8.96 2.006 11.946 1.003-4.48h2.207L95.573 1l2.005 8.96 1.003-4.48h2.608l1.805 2.987z"
      ></path>
      <path
        stroke={fill || "#66C87B"}
        strokeLinecap="round"
        d="M105 8.467h-2.006l-1.805-2.987h-2.608l-1.003 4.48L95.573 1l-2.006 10.453H91.36l-1.003 4.48-2.005-11.946-4.815 8.96-1.203-4.48h-3.21l-3.209 4.48h-1.404l-1.404 2.986-10.99-4.48L60.47 1l-2.276 10.453-3.54-5.973-2.906 2.24-2.207-3.733-3.61 7.467h-3.41L40.716 7.72l-3.21 8.96-1.203-5.226-1.605 2.986-1.003-2.986-3.21 10.453h-1.72l-1.401.426-.69-3.413-2.206-2.24-2.447-2.24-1.682 4.48-3.083 2.987H11.37L9.408 18.92l-2.802 2.987H5.204L4.01 18.92 1 11.454"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_2132_4599"
          x1="53"
          x2="53"
          y1="33"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#77B900" stopOpacity="0"></stop>
          <stop offset="0.81" stopColor="#77B900"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TrendingUpChart;
