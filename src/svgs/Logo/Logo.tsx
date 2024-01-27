import React from "react";

const Logo: React.FC<SvgProps> = ({ width, height, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 40}
      height={height || 40}
      fill="none"
      viewBox="0 0 40 40"
      className={className}
    >
      <path
        fill={fill || "#34CAA5"}
        fillRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20zm6.24-30.683c.303-1.079-.744-1.717-1.7-1.036L11.193 17.79c-1.037.738-.874 2.21.245 2.21h3.515v-.027h6.85l-5.582 1.97-2.46 8.74c-.304 1.079.743 1.717 1.699 1.036l13.347-9.509c1.037-.738.874-2.21-.245-2.21h-5.33L26.24 9.317z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Logo;
