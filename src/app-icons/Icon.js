import React from "react";
import PropTypes from "prop-types";
import assets from "./iconsLib";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const Icon = ({
  size,
  color,
  icon,
  className,
  style,
  viewBox,
  secondColor,
}) => {
  return (
    <svg
      fill="none"
      className={className}
      style={{ ...defaultStyles, ...style }}
      viewBox={viewBox}
      height={`${size}px`}
      width={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xLink"
    >
      {assets[icon](color, secondColor)}
    </svg>
  );
};

Icon.defaultProps = {
  size: 24,
  color: "black",
  viewBox: "0 0 110 110",
  className: "",
  secondColor: "white",
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Icon;
