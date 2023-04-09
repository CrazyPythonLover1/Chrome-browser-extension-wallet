import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { DivFlex } from "../../components";
import {
  EthIcon,
  ChevronDownIcon,
  UpDownArrowsIcon,
  InfoIcon,
} from "../../components/Svg";
import DialogPopup from "../../components/DialogPopup";

const InputField = styled.div`
  flex-basis: 50%;
  input {
    height: 48px;
    font-family: "Lato";
    color: ${({ theme }) => theme.palette.text_colors.neutral_800};
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
    line-height: ${({ theme }) => theme.typography.h3.lineHeight};
    ::placeholder {
      color: ${({ theme }) => theme.palette.text_colors.neutral_500};
      font-family: "Lato";
      font-size: ${({ theme }) => theme.typography.body1.fontSize};
      font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
      line-height: ${({ theme }) => theme.typography.h3.lineHeight};
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

  p {
    color: ${({ theme }) => theme.palette.text_colors.neutral_800};
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

const Label = styled.label`
  color: ${({ theme }) => theme.palette.text_colors.neutral_500};
  font-family: "Lato";
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle1.lineHeight};
`;

const SwapArrows = styled.div`
  width: 40px;
  height: 40px;
  margin: auto;
  background: ${({ theme }) => theme.palette.key_colors.primary_550};
  margin-top: -9px;
  margin-bottom: -9px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const SwapDetails = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.key_colors.primary_350};
  padding: 16px 20px 8px 20px;
  margin-top: 15px;
  border-radius: 12px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p:first-child {
      color: ${({ theme }) => theme.palette.text_colors.neutral_625};
    }
  }

  div:nth-child(-n + 2) {
    margin-bottom: 12px;
  }
  div:nth-child(3) {
    margin-bottom: 0px !important;
    div {
      margin-bottom: 0px;
    }

    input {
      margin-right: 5px;
      min-width: 54px;
      max-width: 54px;
      height: 32px;
      border: 1px solid ${({ theme }) => theme.palette.key_colors.primary_350};
      border-radius: 32px;
      ::placeholder {
        color: ${({ theme }) => theme.palette.text_colors.primary_475};
        font-family: "Lato";
        font-size: ${({ theme }) => theme.typography.body2.fontSize};
        font-weight: ${({ theme }) => theme.typography.body2.fontWeight};
        line-height: ${({ theme }) => theme.typography.body1.lineHeight};
      }
    }
  }
  div:nth-child(n + 2):nth-child(-n + 3) {
    svg {
      margin-bottom: -5px;
      margin-left: 8px;
      cursor: pointer;
    }
  }
`;

const CustomButton = styled.button`
  margin-right: 5px;
  padding: 0 16px;
  height: 32px;
  background: ${({ theme }) => theme.palette.background_colors.white};
  border: 1px solid ${({ theme }) => theme.palette.key_colors.primary_350};
  border-radius: 32px;
  color: ${({ theme }) => theme.palette.text_colors.primary_475};
  font-family: "Lato";
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  cursor: pointer;
`;

function SwapPage() {
  const [openSlippage, setOpenSlippage] = React.useState(false);
  const [openPriceImpact, setOpenPriceImpact] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenSlippage(false);
    setOpenPriceImpact(false);
  };

  return (
    <>
      <DivFlex
        justifyContent="space-between"
        flexDirection="column"
        padding="14px 16px 16px 16px"
        style={{
          height: "374px",
        }}
      >
        <Box>
          <Label> You Pay </Label>
          <DivFlex justifyContent="space-between" gap="16px" marginTop="4px">
            <InputField>
              <Input placeholder="" />
            </InputField>
            <Box sx={{ flexBasis: "50%" }}>
              <SelectToken>
                <EthIcon />
                <Typography variant="body1"> ETH </Typography>
                <ChevronDownIcon />
              </SelectToken>
              <Label style={{ display: "block", textAlign: "right" }}>
                Max 0.0123 ETH
              </Label>
            </Box>
          </DivFlex>

          <SwapArrows>
            <UpDownArrowsIcon />
          </SwapArrows>

          <Label> You Receive </Label>
          <DivFlex justifyContent="space-between" gap="16px" marginTop="4px">
            <InputField>
              <Input placeholder="" />
            </InputField>
            <SelectToken>
              <EthIcon />
              <Typography variant="body1"> AXIE </Typography>
              <ChevronDownIcon />
            </SelectToken>
          </DivFlex>

          <SwapDetails>
            <Box>
              <Typography variant="body1">Expected Output</Typography>
              <Typography>172.23 AXIE</Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                Price Impact{" "}
                <InfoIcon onClick={() => setOpenPriceImpact(true)} />
              </Typography>
              <Typography>0%</Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                Slippage
                <InfoIcon onClick={() => setOpenSlippage(true)} />
              </Typography>
              <Box>
                {/* <Input placeholder="" style={{}} /> */}
                <CustomButton>Custom</CustomButton>

                <Button
                  variant="disable"
                  label="2%"
                  borderRadius="32px"
                  style={{ fontSize: "14px", fontWeight: 400 }}
                />
              </Box>
            </Box>
          </SwapDetails>
        </Box>

        <Button
          size="fullWidth"
          variant="secondary"
          label="Review Swap"
          style={
            {
              // marginBottom: "9px",
              // fontSize: "14px",
              // color: theme.palette.text_colors.primary_475,
            }
          }
          onClick={() => navigate("/review_swap")}
        />
      </DivFlex>
      <DialogPopup
        open={openPriceImpact}
        onClose={handleClose}
        // handleProceed={handleProceed}
        // title="Secure your assets"
        infoIcon
        description="Price impact is the influence of user's individual trade over the market price of an underlying asset pair."
        btn1="Close"
        btn2="Learn more"
      />

      <DialogPopup
        open={openSlippage}
        onClose={handleClose}
        // handleProceed={handleProceed}
        // title="Secure your assets"
        infoIcon
        description="Slippage is the difference between the expected price of an order and the price it executes at. If slippage exceeds your set limit, your swap will cancel."
        btn1="Close"
        btn2="Learn more"
      />
    </>
  );
}

export default SwapPage;
