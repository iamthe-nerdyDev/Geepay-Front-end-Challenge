import React from "react";

const TrendingDownChart: React.FC<SvgProps> = ({ width, height, className, fill }) => {
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
        fill="url(#paint0_linear_2133_4687)"
        fillOpacity="0.16"
        d="M3.006 8.467H1V33h104V11.454l-3.009 7.466-1.195 2.987h-1.402l-2.802-2.987-1.962 2.987h-5.886l-3.083-2.987-1.682-4.48-2.447 2.24-2.207 2.24-.689 3.413-1.401-.426h-1.72l-3.21-10.453-1.003 2.986-1.605-2.986-1.203 5.226-3.21-8.96-1.805 3.734h-3.41l-3.61-7.467-2.207 3.733-2.906-2.24-3.54 5.973L45.53 1l-1.648 10.453-10.99 4.48-1.403-2.986h-1.404l-3.21-4.48h-3.209l-1.204 4.48-4.814-8.96-2.005 11.946-1.003-4.48h-2.207L10.427 1 8.422 9.96 7.419 5.48H4.81L3.006 8.467z"
      ></path>
      <path
        stroke={fill || "#ED544E"}
        strokeLinecap="round"
        d="M1 8.467h2.006L4.81 5.48H7.42l1.003 4.48L10.427 1l2.006 10.453h2.207l1.003 4.48 2.005-11.946 4.814 8.96 1.204-4.48h3.21l3.209 4.48h1.404l1.404 2.986 10.99-4.48L45.53 1l2.276 10.453 3.54-5.973 2.906 2.24 2.207-3.733 3.61 7.467h3.41l1.805-3.734 3.21 8.96 1.203-5.226 1.605 2.986 1.003-2.986 3.21 10.453h1.72l1.401.426.69-3.413 2.206-2.24 2.447-2.24 1.682 4.48 3.083 2.987h5.886l1.962-2.987 2.802 2.987h1.402l1.195-2.987L105 11.454"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_2133_4687"
          x1="53"
          x2="53"
          y1="33"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ED544E" stopOpacity="0"></stop>
          <stop offset="0.81" stopColor="#ED544E"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TrendingDownChart;
