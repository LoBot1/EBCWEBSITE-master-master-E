import * as React from "react";

const Iconhome = ({ size = 38, color = "#ffffff", ...props }) => (
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
      d="M4.32 18.12v-7.8h1.2v7.8a.6.6 0 0 0 .6.6h10.8a.6.6 0 0 0 .6-.6v-7.8h1.2v7.8a1.8 1.8 0 0 1-1.8 1.8H6.12a1.8 1.8 0 0 1-1.8-1.8Zm13.2-13.2v4.2l-2.4-2.4v-1.8a.6.6 0 0 1 .6-.6h1.2a.6.6 0 0 1 .6.6Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M10.672 3.72a1.2 1.2 0 0 1 1.697 0l7.976 7.976a.6.6 0 1 1-.85.85L11.52 4.568l-7.975 7.976a.6.6 0 1 1-.85-.85l7.977-7.975Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Iconhome;