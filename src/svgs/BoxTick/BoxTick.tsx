import React from "react";

const BoxTick: React.FC<SvgProps> = ({ width, height, className, fill }) => {
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
        d="M19.35 5.66l-6.29-3.39c-.66-.36-1.46-.36-2.13 0L4.64 5.66c-.46.25-.74.74-.74 1.28s.28 1.03.74 1.28l6.29 3.39c.33.18.7.27 1.06.27.36 0 .73-.09 1.06-.27l6.29-3.39c.46-.25.74-.74.74-1.28.02-.54-.27-1.03-.73-1.28zM9.9 12.79L4.05 9.86c-.45-.23-.97-.2-1.4.06-.43.26-.68.72-.68 1.22v5.53c0 .96.53 1.82 1.39 2.25l5.85 2.92c.2.1.42.15.64.15.26 0 .52-.07.75-.22.43-.26.68-.72.68-1.22v-5.53c.01-.94-.52-1.8-1.38-2.23zM22.03 11.15v4.59c-.01-.01-.02-.03-.03-.04 0-.01-.01-.02-.02-.03-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 00-.01 6.25l-.47.24a1.432 1.432 0 01-1.4-.07c-.42-.26-.68-.72-.68-1.22v-5.52c0-.96.53-1.82 1.39-2.25l5.85-2.92c.45-.23.97-.21 1.4.06.42.26.68.72.68 1.22z"
        opacity="0.4"
      ></path>
      <path
        fill={fill || "#34CAA5"}
        d="M21.98 15.67a4.46 4.46 0 00-3.48-1.65c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0014 18.52 4.5 4.5 0 0015.66 22h.01c.77.64 1.76 1.02 2.83 1.02 1.14 0 2.17-.42 2.96-1.12A4.5 4.5 0 0023 18.52c0-1.08-.38-2.08-1.02-2.85zm-1.22 2.29l-2.4 2.22c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-1.11-1.11a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.6.6 1.87-1.73c.3-.28.78-.26 1.06.04.29.31.27.78-.04 1.06z"
      ></path>
    </svg>
  );
};

export default BoxTick;