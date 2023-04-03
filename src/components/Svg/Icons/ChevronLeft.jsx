import React from "react";
import Svg from "../Svg";

const ChevronLeft = (props) => {
  return (
    <Svg viewBox="0 0 7 13" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.224 7.06437L5.67467 12.7665C5.992 13.0778 6.47733 13.0778 6.776 12.7665C7.07467 12.4551 7.07467 11.9296 6.776 11.6183L1.86667 6.5L6.776 1.38174C7.07467 1.0509 7.07467 0.54491 6.776 0.233533C6.47733 -0.0778443 5.992 -0.0778443 5.67467 0.233533L0.224 5.91617C-0.074667 6.24701 -0.074667 6.75299 0.224 7.06437Z"
      />
    </Svg>
  );
};

export default ChevronLeft;
