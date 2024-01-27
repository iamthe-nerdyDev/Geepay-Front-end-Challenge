import React from "react";

const Moon: React.FC<SvgProps> = ({ width, height, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 30}
      height={height || 30}
      fill="none"
      viewBox="0 0 30 30"
      className={className}
    >
      <path
        fill={fill || "currentColor"}
        d="M15 4.688a.937.937 0 00.938-.938v-.938a.938.938 0 00-1.876 0v.938a.938.938 0 00.938.938zM15 25.313a.938.938 0 00-.938.937v.938a.938.938 0 001.876 0v-.938a.938.938 0 00-.938-.938zM27.188 14.063h-.938a.938.938 0 000 1.874h.938a.938.938 0 000-1.874zM3.75 14.063h-.938a.938.938 0 000 1.874h.938a.938.938 0 000-1.874zM22.955 5.719l-.663.663a.936.936 0 001.021 1.535.937.937 0 00.305-.21l.663-.662a.94.94 0 00-1.326-1.326zM6.382 22.292l-.664.663a.938.938 0 101.327 1.326l.662-.662a.937.937 0 10-1.325-1.327zM23.617 22.292a.938.938 0 00-1.326 1.326l.663.663a.938.938 0 001.327-1.326l-.664-.663zM6.382 7.708a.938.938 0 001.325-1.325l-.662-.664a.938.938 0 00-1.327 1.326l.664.663zM23.157 16.39a.938.938 0 00-.938-.227 6.486 6.486 0 01-1.942.288 6.736 6.736 0 01-6.73-6.728 6.48 6.48 0 01.29-1.942.937.937 0 00-1.162-1.178 8.602 8.602 0 1010.723 10.725.937.937 0 00-.241-.938z"
      ></path>
    </svg>
  );
};

export default Moon;
