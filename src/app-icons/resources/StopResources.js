import React from "react";

export const stop = function (color) {
  return (
    <React.Fragment>
      <path
        d="M0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5V13.5C3 14.3284 2.32843 15 1.5 15C0.671573 15 0 14.3284 0 13.5V1.5Z"
        fill={color}
      />
      <rect x="9" width="3" height="15" rx="1.5" fill={color} />
    </React.Fragment>
  );
};
