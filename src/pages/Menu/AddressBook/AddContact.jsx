import React from "react";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import NavigationHeader from "../../../components/NavigationHeader";
import { DivFlex } from "../../../components";
import Button from "../../../components/Button";

const InputWrapper = styled.div`
  input {
    background: ${({ theme }) => theme.palette.text_colors.neutral_0};
    border: 1px solid ${({ theme }) => theme.palette.text_colors.neutral_275};
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 16px;
    width: 343px;
    border-radius: 10px;
    margin-bottom: 14px;
    ::placeholder {
      color: ${({ theme }) => theme.palette.text_colors.neutral_675};
      font-family: "Lato";
      font-size: ${({ theme }) => theme.typography.button.fontSize};
      font-weight: ${({ theme }) => theme.typography.button.fontWeight};
      line-height: ${({ theme }) => theme.typography.body1.lineHeight};
    }
  }
`;

const InputField = styled.input`
  height: "40px";
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

const AddContact = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const inputFields = [
    {
      label: "Name",
      placeholder: "Choose name",
    },
    {
      label: "Address",
      placeholder: "Enter address or ENS",
    },
  ];

  return (
    <>
      <NavigationHeader label="Add Contact" info />
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
            <React.Fragment key={data.label}>
              <Label>{data.label}</Label>
              <InputField index={index} placeholder={data.placeholder} />
            </React.Fragment>
          ))}
        </InputWrapper>

        <Button
          size="fullWidth"
          variant="secondary"
          label="Create"
          style={{ marginBottom: "9px" }}
          onClick={() => navigate("/menu/address_book/add_contact_completed")}
        />
      </DivFlex>
    </>
  );
};

export default AddContact;
