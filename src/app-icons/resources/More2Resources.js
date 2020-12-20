import React from "react";

export const more2 = function (color) {
  return (
    <React.Fragment>
      <circle cx="32" cy="6" r="6" fill={color} />
      <circle cx="6" cy="6" r="6" fill={color} />
      <circle cx="58" cy="6" r="6" fill={color} />
    </React.Fragment>
  );
};
