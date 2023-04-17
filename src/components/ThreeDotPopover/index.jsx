import React from "react";
import { Popover, Typography, useTheme } from "@mui/material";
import styled from "@emotion/styled";

const WrapperPopover = styled(Popover)(({ theme }) => ({
  "& .MuiPopover-paper": {
    border: `1px solid ${theme.palette.key_colors.primary_550}`,
    borderRadius: "16px",
    boxShadow: "none",
  },
}));

const Options = styled.div`
  padding: 15px;
  width: 110px;
  border: 1px solid ${({ theme }) => theme.palette.key_colors.primary_50};
`;
const OptionItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  div {
    padding: 8px;
    background: ${({ theme }) => theme.palette.key_colors.primary_50};
    border-radius: 4px;
    margin-right: 18px;
  }
  p {
    font-family: "Helvetica Neue LT Pro";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.palette.text_colors.neutral_800};
  }
`;

function ThreeDotPopover({ anchorEl, handleClose, options }) {
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    // <Wrapper>
    <WrapperPopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      sx={{
        marginTop: "5px",
      }}
    >
      <Options>
        {options.map((item) => (
          <OptionItem onClick={() => item.onClick()}>
            <div> {item.icon} </div> <Typography> {item.label} </Typography>
          </OptionItem>
        ))}
      </Options>
    </WrapperPopover>
    // </Wrapper>
  );
}

export default ThreeDotPopover;
