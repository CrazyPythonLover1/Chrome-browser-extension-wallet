import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { DivFlex } from "../../components";
import { EthIcon } from "../../components/Svg";
import ChevronDown from "../../components/Svg/Icons/ChevronDown";

const InputField = styled.div`
  flex-basis: 50%;
  input {
    height: 48px;
    ::placeholder {
      color: ${({ theme }) => theme.palette.text_colors.neutral_500};
      font-family: "Lato";
      font-size: ${({ theme }) => theme.typography.body1.fontSize};
      font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
      line-height: ${({ theme }) => theme.typography.body1.lineHeight};
    }
  }
`;

const SelectToken = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 50%;
  svg {
    // flex: 1;
  }
  p {
    color: ${({ theme }) => theme.palette.text_colors.neutral_800};
    // flex: 2;
  }
  // color: ${({ theme }) => theme.palette.text_colors.neutral_500};
  // font-family: "Lato";
  // font-size: ${({ theme }) => theme.typography.body1.fontSize};
  // font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  // line-height: ${({ theme }) => theme.typography.body1.lineHeight};

  box-sizing: border-box;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.palette.text_colors.neutral_275};
  border-radius: 10px;
`;

// const SelectContainer = styled.div`
//   position: relative;
// `;

// const Select = styled.select`
//   appearance: none;
//   background-color: #fff;
//   border: 1px solid #e2e2e8;
//   border-radius: 10px;
//   cursor: pointer;
//   font-size: 16px;
//   font-weight: 500;
//   height: 40px;
//   outline: none;
//   padding: 0 12px;
//   width: 100%;

//   &:hover {
//     border-color: #bfbfc4;
//   }

//   &:focus {
//     border-color: #007fff;
//   }

//   &::-ms-expand {
//     display: none;
//   }
// `;

// const ArrowIcon = styled.div`
//   position: absolute;
//   top: 50%;
//   right: 12px;
//   transform: translateY(-50%);
//   pointer-events: none;
//   width: 16px;
//   height: 16px;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

const Option = styled.option``;

function SendPage() {
  const navigate = useNavigate();
  const options = [
    { value: "eth", label: "ETH" },
    { value: "eth", label: "ETH" },
  ];
  return (
    <>
      <Box
        sx={{
          padding: "16px",
          height: "372px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography variant="subtitle1" sx={{ marginBottom: "4px" }}>
            Recepient’s address
          </Typography>
          <InputField>
            <Input placeholder="Search public address, or ENS" />
          </InputField>
          <DivFlex justifyContent="space-between" gap="16px" marginTop="32px">
            <InputField>
              <Input placeholder="Amount" />
            </InputField>
            <SelectToken>
              <EthIcon />
              <Typography variant="body1"> ETH </Typography>
              <ChevronDown />
            </SelectToken>
            {/* <SelectContainer>
              <Select>
                {options.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
              <ArrowIcon />
            </SelectContainer> */}
          </DivFlex>
        </Box>

        <Button
          size="fullWidth"
          variant="secondary"
          label="Next"
          style={{
            marginBottom: "9px",
            // fontSize: "14px",
            // color: theme.palette.text_colors.primary_475,
          }}
          onClick={() => navigate("/send/check_assets")}
        />
      </Box>
    </>
  );
}

export default SendPage;
