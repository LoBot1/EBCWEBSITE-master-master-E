import * as React from "react";

const Iconlist = ({ size = 38, color = "#ffffff", ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.8 6a.6.6 0 0 1 .6.6v10.8a.6.6 0 0 1-.6.6H4.2a.6.6 0 0 1-.6-.6V6.6a.6.6 0 0 1 .6-.6h15.6ZM4.2 4.8a1.8 1.8 0 0 0-1.8 1.8v10.8a1.8 1.8 0 0 0 1.8 1.8h15.6a1.8 1.8 0 0 0 1.8-1.8V6.6a1.8 1.8 0 0 0-1.8-1.8H4.2Z" />
    <path d="M8.4 12a.6.6 0 0 1 .6-.6h8.4a.6.6 0 1 1 0 1.2H9a.6.6 0 0 1-.6-.6Zm0-3a.6.6 0 0 1 .6-.6h8.4a.6.6 0 1 1 0 1.2H9a.6.6 0 0 1-.6-.6Zm0 6a.6.6 0 0 1 .6-.6h8.4a.6.6 0 1 1 0 1.2H9a.6.6 0 0 1-.6-.6ZM7.2 9A.6.6 0 1 1 6 9a.6.6 0 0 1 1.2 0Zm0 3A.6.6 0 1 1 6 12a.6.6 0 0 1 1.2 0Zm0 3A.6.6 0 1 1 6 15a.6.6 0 0 1 1.2 0Z" />
  </svg>
);

export default Iconlist;