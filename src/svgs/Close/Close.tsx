import React from "react";

const Close: React.FC<SvgProps> = ({ width, height, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width || 20}
      height={height || 20}
      className={className}
    >
      <g>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g fill={fill || "currentColor"} transform="translate(91.52 91.52)">
            <path d="M328.96 30.2933333L298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Close;
