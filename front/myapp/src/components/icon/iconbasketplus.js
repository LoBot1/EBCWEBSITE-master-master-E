import * as React from "react";

const Iconbasketplus = ({ size = 25, color = "#ffffff", ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11.76 11.4a.6.6 0 0 1 .6.6v1.8h1.8a.6.6 0 1 1 0 1.2h-1.8v1.8a.6.6 0 1 1-1.2 0V15h-1.8a.6.6 0 1 1 0-1.2h1.8V12a.6.6 0 0 1 .6-.6Z"
      clipRule="evenodd"
    />
    <path d="M11.76 3.6a3 3 0 0 1 3 3v.6h-6v-.6a3 3 0 0 1 3-3Zm4.2 3.6v-.6a4.2 4.2 0 1 0-8.4 0v.6h-4.2v12a2.4 2.4 0 0 0 2.4 2.4h12a2.4 2.4 0 0 0 2.4-2.4v-12h-4.2ZM4.56 8.4h14.4v10.8a1.2 1.2 0 0 1-1.2 1.2h-12a1.2 1.2 0 0 1-1.2-1.2V8.4Z" />
  </svg>
);

export default Iconbasketplus;