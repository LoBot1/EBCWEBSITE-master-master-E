import * as React from "react";

const Iconflechright = ({ size = 30, color = "#af5d15", ...props }) => (
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
            d="M3.25 12a8.75 8.75 0 1 0 17.5 0 8.75 8.75 0 0 0-17.5 0ZM22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-14.375-.625a.625.625 0 1 0 0 1.25h7.241l-2.684 2.682a.627.627 0 0 0 .886.885l3.75-3.75a.625.625 0 0 0 0-.885l-3.75-3.75a.626.626 0 1 0-.886.886l2.684 2.682H7.625Z"
            clipRule="evenodd"
        />
    </svg>
);

export default Iconflechright;