import React from "react";

export const more = function (color) {
  return (
    <React.Fragment>
      <path
        d="M55 106C83.1665 106 106 83.1665 106 55C106 26.8335 83.1665 4 55 4C26.8335 4 4 26.8335 4 55C4 83.1665 26.8335 106 55 106Z"
        stroke={color}
        stroke-width="8"
      />
      <circle cx="55" cy="55" r="6" fill={color} />
      <circle cx="34" cy="55" r="6" fill={color} />
      <circle cx="76" cy="55" r="6" fill={color} />
    </React.Fragment>
  );
};
