import React from "react";

export const logOut = function (color) {
  return (
    <React.Fragment>
      <line
        x1="44"
        y1="53.5"
        x2="94.0086"
        y2="53.5"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line
        x1="104.004"
        y1="53.1896"
        x2="85.9822"
        y2="40.5709"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line
        x1="85.9823"
        y1="66.5327"
        x2="104.004"
        y2="53.914"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="65" cy="104" r="4" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.4277 0H23C10.2974 0 0 10.2975 0 23V85C0 97.7026 10.2975 108 23 108H65.4277V100H23C14.7157 100 8 93.2843 8 85V23C8 14.7157 14.7157 8 23 8H65.4277V0Z"
        fill={color}
      />
      <circle cx="65" cy="4" r="4" fill={color} />
    </React.Fragment>
  );
};
