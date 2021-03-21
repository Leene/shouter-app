import React from "react";
import PropTypes from "prop-types";

export function Props() {
  Title.propTypes = {
    /** The text of the h1-title */
    children: PropTypes.string,
    /** The color of the h1-title */
    color: PropTypes.string,
    /** The size of the h1-title */
    size: PropTypes.oneOf(["small", "medium", "large"]),
  };
}
/** An h1-Title represents the main heading of a page and should appear only once per page.*/
function Title({ color, size, children, ...props }) {
  const getStyle = () => ({
    color: color,
    fontSize: size === "large" ? "40px" : size === "medium" ? "30px" : "20px",
  });

  return <h1 style={getStyle()}>{children} </h1>;
}
export default Title;
