import React from "react";

const Svg = (props) => {
  const {
    width,
    height,
    color,
    size,
    className,
    children,
    variant,
    active,
    hide: boolean,
    ...rest
  } = props;

  const classNames = ["shape"];
  classNames.push(className ? className : "");

  const w =
    size === "lg"
      ? "24px"
      : size === "md"
      ? "20px"
      : size === "sm"
      ? "16px"
      : size !== "lg" && size !== "md" && size !== "sm"
      ? width
      : "16px";
  const h =
    size === "lg"
      ? "24px"
      : size === "md"
      ? "20px"
      : size === "sm"
      ? "16px"
      : size !== "lg" && size !== "md" && size !== "sm"
      ? height
      : "16px";

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      strokeWidth={"1.4px"}
      className={classNames.join(" ")}
      {...rest}
    >
      {children}
    </svg>
  );
};

Svg.defaultProps = {
  color: "#6871EA",
  variant: "outlined",
  size: "md",
};

export default Svg;
