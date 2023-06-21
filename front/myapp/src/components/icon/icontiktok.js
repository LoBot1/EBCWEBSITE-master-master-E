import * as React from "react";

const Tiktok = ({ size = 120, color = "#fff", ...props }) => (
    <svg
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M12.72 2.4h2.376c.173.858.648 1.94 1.482 3.015.816 1.052 1.899 1.785 3.342 1.785v2.4c-2.103 0-3.684-.976-4.8-2.194V15.6a6 6 0 1 1-6-6V12a3.6 3.6 0 1 0 3.6 3.6V2.4Z" />
    </svg>
);

export default Tiktok;