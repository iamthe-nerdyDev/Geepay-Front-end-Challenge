import React from "react";

const ShoppingCart: React.FC<SvgProps> = ({ width, height, className, fill }) => {
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
        fill={fill || "#34CAA5"}
        d="M16.25 22.5a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM8.25 22.5a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
      ></path>
      <path
        fill={fill || "#34CAA5"}
        d="M4.84 3.94l-.2 2.45c-.04.47.33.86.8.86h15.31c.42 0 .77-.32.8-.74.13-1.77-1.22-3.21-2.99-3.21H6.29c-.1-.44-.3-.86-.61-1.21a2.62 2.62 0 00-1.91-.84H2c-.41 0-.75.34-.75.75s.34.75.75.75h1.74c.31 0 .6.13.81.35.21.23.31.53.29.84z"
        opacity="0.4"
      ></path>
      <path
        fill={fill || "#34CAA5"}
        d="M20.51 8.75H5.17c-.42 0-.76.32-.8.73l-.36 4.35C3.87 15.53 5.21 17 6.92 17h11.12c1.5 0 2.82-1.23 2.93-2.73l.33-4.67a.782.782 0 00-.79-.85z"
      ></path>
    </svg>
  );
};

export default ShoppingCart;