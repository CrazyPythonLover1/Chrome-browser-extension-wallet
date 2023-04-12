import React from "react";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import NavigationHeader from "../../../../components/NavigationHeader";
import styled from "@emotion/styled";
import { DivFlex } from "../../../../components";
import Button from "../../../../components/Button";

const InputBox = styled.div`
  background: ${({ theme }) => theme.palette.text_colors.neutral_0};
  border: 1px solid ${({ theme }) => theme.palette.text_colors.neutral_275};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 16px;
  gap: 8px;
  width: 343px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 14px;
`;

const Label = styled.div`
  height: 20px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_675};
  margin-bottom: 5px;
`;

const InsideText = styled.div`
  height: 20px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_675};
`;

const AdvancedOption = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const advancedBoxData = [
    {
      label: "Gas Limit",
      leftext: 21000,
      rightText: "",
    },
    {
      label: "Max Priority Fee (GWEI)",
      leftext: 1.5,
      rightText: "$0.04 USD",
    },
    {
      label: "Max Fee (GWEI)",
      leftext: 21.34,
      rightText: "$0.01 USD",
    },
  ];

  return (
    <>
      <NavigationHeader label="Advanced Options" info />
      <DivFlex
        padding="16px"
        justifyContent="space-between"
        flexDirection="column"
        style={{
          height: "372px",
        }}
      >
        <Box>
          {advancedBoxData.map((data, index) => (
            <React.Fragment key={index}>
              <Label>{data.label}</Label>
              <InputBox>
                <InsideText>{data.leftext}</InsideText>
                <InsideText>{data.rightText}</InsideText>
              </InputBox>
            </React.Fragment>
          ))}
        </Box>

        <Button
          size="fullWidth"
          variant="secondary"
          label="Save"
          style={{ marginBottom: "9px" }}
          onClick={() => navigate("/")}
        />
      </DivFlex>
    </>
  );
};

export default AdvancedOption;
