import React from "react";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import NavigationHeader from "../../../components/NavigationHeader";
import { DivFlex } from "../../../components";
import Button from "../../../components/Button";

const InputWrapper = styled.div`
  input,
  textarea {
    background: ${({ theme }) => theme.palette.text_colors.neutral_0};
    border: 1px solid ${({ theme }) => theme.palette.text_colors.neutral_275};
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 16px;
    gap: 8px;
    width: 343px;
    border-radius: 10px;
    margin-bottom: 14px;
  }
`;

const InputField = styled.input`
  height: ${({ index }) => (index === 1 ? "78px" : "40px")};
`;

const TextArea = styled.textarea`
  height: ${({ index }) => (index === 1 ? "78px" : "40px")};
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

const ImportWallet = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const inputFields = [
    {
      label: "Name",
      placeholder: "Optional",
    },
    {
      label: "Enter your private key",
    },
  ];

  return (
    <>
      <NavigationHeader label="Import Wallet" info />
      <DivFlex
        padding="16px"
        justifyContent="space-between"
        flexDirection="column"
        style={{
          height: "372px",
        }}
      >
        <InputWrapper>
          {inputFields.map((data, index) => (
            <React.Fragment key={index}>
              <Label>{data.label}</Label>
              {index === 0 ? (
                <InputField index={index} placeholder={data.placeholder} />
              ) : (
                <TextArea index={index} placeholder={data.placeholder} />
              )}
            </React.Fragment>
          ))}
        </InputWrapper>

        <Button
          size="fullWidth"
          variant="secondary"
          label="Import"
          style={{ marginBottom: "9px" }}
          onClick={() => navigate("/")}
        />
      </DivFlex>
    </>
  );
};

export default ImportWallet;
