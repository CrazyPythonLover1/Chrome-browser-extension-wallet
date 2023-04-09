import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Button from "../../../components/Button";
import { DivFlex } from "../../../components";
import { EthIcon, InfoIcon } from "../../../components/Svg";
import DialogPopup from "../../../components/DialogPopup";
import NavigationHeader from "../../../components/NavigationHeader";

const Label = styled.label`
  color: ${({ theme }) => theme.palette.text_colors.neutral_500};
  font-family: "Lato";
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle1.lineHeight};
`;

const SwapDetails = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.key_colors.primary_350};
  padding: 16px;
  margin-bottom: 33px;
  border-radius: 12px;

  div {
    display: flex;
    justify-content: space-between;

    p:first-child {
      color: ${({ theme }) => theme.palette.text_colors.neutral_625};
    }
  }

  .info {
    margin-bottom: -5px;
    margin-left: 8px;
    cursor: pointer;
  }
`;

function ReviewSwap() {
  const [openSlippage, setOpenSlippage] = React.useState(false);
  const [openPriceImpact, setOpenPriceImpact] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenSlippage(false);
    setOpenPriceImpact(false);
  };

  return (
    <>
      <NavigationHeader label="Review Swap" />
      <DivFlex
        justifyContent="space-between"
        flexDirection="column"
        padding="16px"
        style={{
          height: "374px",
        }}
      >
        <Box>
          <SwapDetails>
            <Box sx={{ marginBottom: "25px" }}>
              <Typography variant="body1">You Pay</Typography>
              <Box
                sx={{
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <DivFlex justifyContent="space-between" alignItems="center">
                  <EthIcon onClick={() => setOpenPriceImpact(true)} />
                  <Typography>0.85 ETH</Typography>
                </DivFlex>
                <Label>Max 0.0123 ETH</Label>
              </Box>
            </Box>
            <Box>
              <Typography variant="body1">You Receive</Typography>

              <DivFlex justifyContent="space-between" alignItems="center">
                <EthIcon onClick={() => setOpenPriceImpact(true)} />
                <Typography>172.23 AXIE</Typography>
              </DivFlex>
            </Box>
          </SwapDetails>

          <SwapDetails>
            <Box sx={{ marginBottom: "25px" }}>
              <Typography variant="body2">
                Swap Rate
                <InfoIcon
                  className="info"
                  onClick={() => setOpenPriceImpact(true)}
                />
              </Typography>
              <Box
                sx={{
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <DivFlex justifyContent="space-between" alignItems="center">
                  {/* <EthIcon onClick={() => setOpenPriceImpact(true)} /> */}
                  <Typography>1 ETH = 202 AXIE</Typography>
                </DivFlex>
                <Label style={{ display: "block", textAlign: "right" }}>
                  See more quotes
                </Label>
              </Box>
            </Box>

            <Box sx={{ marginBottom: "" }}>
              <Typography variant="body2">
                Estimated Gas Fees
                <InfoIcon
                  className="info"
                  onClick={() => setOpenPriceImpact(true)}
                />
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <DivFlex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  {/* <EthIcon onClick={() => setOpenPriceImpact(true)} /> */}
                  <Typography>0.0031 ETH $4.52</Typography>
                </DivFlex>
                <Label style={{ display: "block", textAlign: "right" }}>
                  Max fee: $7.82
                </Label>
              </Box>
            </Box>
          </SwapDetails>
        </Box>

        <Button
          size="fullWidth"
          variant="secondary"
          label="Swap"
          onClick={() => navigate("/swap")}
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

export default ReviewSwap;
