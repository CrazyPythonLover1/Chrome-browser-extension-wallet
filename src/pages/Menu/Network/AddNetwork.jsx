import React from "react";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import NavigationHeader from "../../../components/NavigationHeader";
import { DivFlex } from "../../../components";
import Button from "../../../components/Button";

const InputField = styled.div`
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
  margin-bottom: 5px;
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

const AddNetwork = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const inputFields = [
    {
      label: "Network Name",
      leftext: 21000,
      rightText: "",
    },
    {
      label: "New RPC URL",
      leftext: 1.5,
      rightText: "$0.04 USD",
    },
    {
      label: "Chain ID",
      leftext: 21.34,
      rightText: "$0.01 USD",
    },
    {
      label: "Currency Symbol",
      leftext: 21.34,
      rightText: "$0.01 USD",
    },
  ];

  return (
    <>
      <NavigationHeader label="Add Network Manually" info />
      <DivFlex
        padding="16px"
        justifyContent="space-between"
        flexDirection="column"
        style={{
          height: "372px",
        }}
      >
        <Box>
          {inputFields.map((data, index) => (
            <React.Fragment key={index}>
              <Label>{data.label}</Label>
              <InputField>
                <InsideText>{data.leftext}</InsideText>
                <InsideText>{data.rightText}</InsideText>
              </InputField>
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

export default AddNetwork;
