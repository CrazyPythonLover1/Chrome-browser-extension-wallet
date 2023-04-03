import React from "react";
import styled from "@emotion/styled";
import { Typography, useTheme } from "@mui/material";

const BUTTON_SIZE = {
  NORMAL: "normal",
  FULL_WIDTH: "fullWidth",
};

const BUTTON_TYPE = {
  PRIMARY: "primary",
  DISABLE: "disable",
  TRANSPARENT: "transparent",
  REMOVE: "remove",
  SECONDARY: "secondary",
  GREY: "grey",
  SECURITY: "security",
};

const ButtonWrapper = styled.button`
  padding: ${(props) => (props.size === BUTTON_SIZE.NORMAL ? "0 30px" : "0")};
  width: ${(props) =>
    props.size === BUTTON_SIZE.FULL_WIDTH
      ? "100%"
      : props.width
      ? props.width
      : "100%"};
  height: ${(props) => (props.height ? props.height : "36px")};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "40px"};
  cursor: pointer;
  font-family: "Helvetica Neue LT Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  :focus-visible {
    outline: none;
  }
  svg {
    path {
      fill: ${(props) => props.svgColor};
    }
    margin-right: 10px;
  }
`;

const Button = (props) => {
  const theme = useTheme();
  // size = normal > small
  // variant = primary > filled background border-none
  // variant = secondary > white background border-outlined
  const {
    size = BUTTON_SIZE.NORMAL,
    variant = BUTTON_TYPE.PRIMARY,
    width,
    height,
    label,
    icon,
    onClick,
    isDisabled,
  } = props;
  let buttonType = {
    color: theme.palette.text_colors.neutral_0,
    background: theme.palette.key_colors.primary_550,
    border: "none",
    svgColor: theme.palette.text_colors.neutral_0,
  };
  if (isDisabled) {
    buttonType = {
      color: theme.button.primary,
      background: "white",
      border: `1px solid ${theme.button.primary}`,
    };
  } else if (variant === BUTTON_TYPE.SECONDARY) {
    buttonType = {
      color: theme.palette.text_colors.primary_550,
      background: theme.palette.text_colors.neutral_0,
      border: `1.56px solid ${theme.palette.key_colors.primary_475}`,
      svgColor: theme.palette.text_colors.primary_550,
    };
  } else if (variant === BUTTON_TYPE.DISABLE) {
    buttonType = {
      color: theme.button.primary,
      background: "white",
      border: `1px solid ${theme.button.primary}`,
    };
  } else if (variant === BUTTON_TYPE.SECURITY) {
    buttonType = {
      color: theme.palette.text_colors.neutral_675,
      background: theme.palette.text_colors.neutral_0,
      border: `1px solid ${theme.palette.key_colors.primary_475}`,
      borderRadius: "13px",
    };
  } else if (variant === BUTTON_TYPE.REMOVE) {
    buttonType = {
      color: "#ffffff",
      background: "#FF9C9C",
      border: "1px solid #EEE6F3",
    };
  } else if (variant === BUTTON_TYPE.GREY) {
    buttonType = {
      color: theme.palette.text_colors.neutral_800,
      background: theme.palette.text_colors.neutral_0,
      border: `1px solid ${theme.palette.text_colors.neutral_275}`,
    };
  }
  return (
    <ButtonWrapper
      onClick={onClick}
      size={size}
      width={width}
      height={height}
      color={buttonType.color}
      background={buttonType.background}
      border={buttonType.border}
      borderRadius={buttonType.borderRadius}
      svgColor={buttonType.svgColor}
      {...props}
    >
      {icon ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
          <Typography variant="button"> {label} </Typography>
        </div>
      ) : (
        <Typography variant="button"> {label} </Typography>
      )}
    </ButtonWrapper>
  );
};

export default Button;
