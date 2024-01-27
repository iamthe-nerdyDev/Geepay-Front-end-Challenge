import React from "react";

const DocumentDownload: React.FC<SvgProps> = ({ width, height, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 16}
      height={height || 16}
      fill="none"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        fill={fill || "currentColor"}
        d="M6 11.833a.503.503 0 01-.5-.5v-4c0-.273.227-.5.5-.5s.5.227.5.5v2.794l.48-.48a.503.503 0 01.707 0 .503.503 0 010 .706l-1.334 1.334a.512.512 0 01-.353.146z"
      ></path>
      <path
        fill={fill || "currentColor"}
        d="M6 11.833a.495.495 0 01-.354-.146l-1.333-1.334a.503.503 0 010-.706.503.503 0 01.707 0l1.333 1.333a.503.503 0 010 .707c-.1.1-.227.146-.353.146z"
      ></path>
      <path
        fill={fill || "currentColor"}
        d="M10 15.167H6C2.38 15.167.833 13.62.833 10V6C.833 2.38 2.38.833 6 .833h3.333c.273 0 .5.227.5.5 0 .274-.227.5-.5.5H6C2.926 1.833 1.833 2.927 1.833 6v4c0 3.073 1.093 4.167 4.167 4.167h4c3.073 0 4.166-1.094 4.166-4.167V6.667c0-.274.227-.5.5-.5.274 0 .5.226.5.5V10c0 3.62-1.546 5.167-5.166 5.167z"
      ></path>
      <path
        fill={fill || "currentColor"}
        d="M14.666 7.167H12C9.72 7.167 8.833 6.28 8.833 4V1.333c0-.2.12-.386.307-.46.186-.08.4-.033.546.107l5.334 5.333a.502.502 0 01-.354.854zM9.833 2.54V4c0 1.72.447 2.167 2.167 2.167h1.46L9.833 2.54z"
      ></path>
    </svg>
  );
};

export default DocumentDownload;
