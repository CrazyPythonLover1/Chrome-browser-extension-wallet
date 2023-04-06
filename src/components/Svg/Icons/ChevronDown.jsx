import React from "react";
import Svg from "../Svg";

const ChevronDown = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4703 12.7297L15.222 8.18745C15.4815 7.92301 15.4815 7.51856 15.222 7.26967C14.9626 7.02079 14.5247 7.02079 14.2652 7.26967L9.99998 11.3608L5.73476 7.26967C5.45906 7.02079 5.0374 7.02079 4.77792 7.26967C4.51844 7.51856 4.51844 7.92301 4.77792 8.18745L9.51345 12.7297C9.78915 12.9786 10.2108 12.9786 10.4703 12.7297Z"
        fill="#6871EA"
      />
    </Svg>
  );
};

export default ChevronDown;
