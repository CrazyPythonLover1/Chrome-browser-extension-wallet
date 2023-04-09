import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

const InputField = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 16px;
  gap: 8px;
  background: ${({ theme }) => theme.palette.text_colors.neutral_0};
  border: 1px solid ${({ theme }) => theme.palette.text_colors.neutral_275};
  border-radius: 10px;
  caret-color: ${({ theme }) => theme.palette.text_colors.primary_550};
  ::placeholder {
    color: ${({ theme }) => theme.palette.text_colors.neutral_675};
    font-family: "Lato";
    font-size: ${({ theme }) => theme.typography.button.fontSize};
    font-weight: ${({ theme }) => theme.typography.button.fontWeight};
    line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.palette.border_colors.primary_350};
  }
`;

function Input({ placeholder }) {
  return (
    <Box>
      <InputField placeholder={placeholder} />
    </Box>
  );
}

export default Input;
