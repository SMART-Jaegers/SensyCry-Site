import React from "react";
import PropTypes from "prop-types";
import { clock } from "./iconsLib";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const Icon = ({
  size = 20,
  color = "blue",
  icon,
  className,
  style,
  viewBox = "0 0 110 110",
}) => {
  return (
    <svg
      className={className}
      style={defaultStyles}
      viewBox={viewBox}
      height={`${size}px`}
      width={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xLink"
    >
      {clock()}
    </svg>
  );
};

export default Icon;
