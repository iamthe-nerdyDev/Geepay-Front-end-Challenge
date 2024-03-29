import React from "react";

const Bell: React.FC<SvgProps> = ({ width, height, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 20}
      height={height || 20}
      fill="none"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        fill={fill || "currentColor"}
        fillRule="evenodd"
        d="M10 1.042A6.458 6.458 0 003.542 7.5v.587c0 .58-.172 1.148-.494 1.631l-.956 1.436a2.934 2.934 0 001.669 4.459c.629.171 1.264.316 1.903.435l.002.005c.64 1.71 2.352 2.905 4.334 2.905 1.982 0 3.694-1.195 4.335-2.905l.002-.005c.64-.119 1.275-.264 1.903-.435a2.933 2.933 0 001.67-4.459l-.957-1.436a2.941 2.941 0 01-.495-1.631V7.5A6.458 6.458 0 0010 1.042zm2.813 15.239a23.72 23.72 0 01-5.627 0c.592.85 1.623 1.427 2.814 1.427 1.19 0 2.22-.576 2.813-1.427zM4.792 7.5a5.208 5.208 0 1110.416 0v.587c0 .827.245 1.636.705 2.325l.956 1.435a1.682 1.682 0 01-.958 2.56 22.466 22.466 0 01-11.823 0 1.684 1.684 0 01-.958-2.559l.958-1.436a4.192 4.192 0 00.704-2.325V7.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Bell;
