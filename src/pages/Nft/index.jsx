import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import styled from "@emotion/styled";

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

const Nft = () => {
  return (
    <>
      <Header page="homepage" />

      <Box
        sx={{
          padding: "16px",
          height: "372px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <InputField />
      </Box>
    </>
  );
};

export default Nft;
