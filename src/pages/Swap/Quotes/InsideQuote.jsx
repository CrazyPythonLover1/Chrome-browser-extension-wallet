import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Typography, useTheme } from "@mui/material";
import Button from "../../../components/Button";
import { DivFlex } from "../../../components";
import { EthIcon, InfoIcon } from "../../../components/Svg";
import DialogPopup from "../../../components/DialogPopup";
import NavigationHeader from "../../../components/NavigationHeader";

const Label = styled.label`
  color: ${({ theme }) => theme.palette.text_colors.neutral_625};
  font-family: "Lato";
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: flex-end;
`;

const SwapDetails = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.key_colors.primary_350};
  padding: 16px;
  margin-bottom: 14px;
  border-radius: 12px;

  div {
    display: flex;
    justify-content: space-between;

    p:first-of-type {
      line-height: 24px;
    }
  }

  .info {
    margin-bottom: -5px;
    margin-left: 8px;
    cursor: pointer;
  }
`;

function InsideQuote() {
  const theme = useTheme();
  const [openSwapRateModal, setOpenSwapRateModal] = React.useState(false);
  const [openGasFeeModal, setOpenGasFeeModal] = React.useState(false);
  const [openLiquidityProvidersModal, setOpenLiquidityProvidersModal] =
    React.useState(false);
  const [openClutchFeeModal, setOpenClutchFeeModal] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenSwapRateModal(false);
    setOpenGasFeeModal(false);
    setOpenLiquidityProvidersModal(false);
    setOpenClutchFeeModal(false);
  };

  return (
    <>
      <NavigationHeader label="Review Swap" />
      <Box
        sx={{
          padding: "16px",
        }}
      >
        <Box>
          <SwapDetails>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text_colors.neutral_800,
                lineHeight: "22px",
              }}
            >
              We source the best prices from multiple liquidity providers, like
              Uniswap and Balancer. To make things easy, we automatically choose
              the best quote so you can transact with ease.
            </Typography>
          </SwapDetails>

          <SwapDetails>
            <DivFlex
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "10px" }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text_colors.neutral_625,
                }}
              >
                Swap Rate
                <InfoIcon
                  className="info"
                  onClick={() => setOpenSwapRateModal(true)}
                />
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text_colors.neutral_675,
                  fontWeight: 600,
                }}
              >
                1 ETH = 202 AXIE
              </Typography>
            </DivFlex>

            <DivFlex
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "10px" }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text_colors.neutral_625,
                }}
              >
                Estimated Gas Fees
                <InfoIcon
                  className="info"
                  onClick={() => setOpenGasFeeModal(true)}
                />
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text_colors.neutral_675,
                  fontWeight: 600,
                }}
              >
                0.0031 ETH $4.52
              </Typography>
            </DivFlex>

            <DivFlex
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "10px" }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text_colors.neutral_625,
                }}
              >
                Liquidity Provider
                <InfoIcon
                  className="info"
                  onClick={() => setOpenLiquidityProvidersModal(true)}
                />
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text_colors.neutral_675,
                  fontWeight: 600,
                }}
              >
                Aggregator
              </Typography>
            </DivFlex>

            <DivFlex
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "10px" }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text_colors.neutral_625,
                }}
              >
                Clutch Fee
                <InfoIcon
                  className="info"
                  onClick={() => setOpenClutchFeeModal(true)}
                />
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text_colors.neutral_675,
                  fontWeight: 600,
                }}
              >
                1%
              </Typography>
            </DivFlex>

            <Label>Included in the price.</Label>
          </SwapDetails>
        </Box>
      </Box>
      <DialogPopup
        open={openSwapRateModal}
        onClose={handleClose}
        // handleProceed={handleProceed}
        // title="Secure your assets"
        infoIcon
        description="The swap rate is the rate at which your exchange occurs. We obtain the best possible price through multiple liquidity providers."
        btn1="Close"
        btn2="Learn more"
      />

      <DialogPopup
        open={openGasFeeModal}
        onClose={handleClose}
        // handleProceed={handleProceed}
        // title="Secure your assets"
        infoIcon
        description="Gas fees are blockchain transaction fees paid to network validators. This fee is an estimate, and may change at the time of settlement."
        btn1="Close"
        btn2="Learn more"
      />

      <DialogPopup
        open={openLiquidityProvidersModal}
        onClose={handleClose}
        // handleProceed={handleProceed}
        // title="Secure your assets"
        infoIcon
        description="We receive quotes from multiple liquidity providers to ensure you’re getting the best price possible."
        btn1="Close"
        btn2="Learn more"
      />

      <DialogPopup
        open={openClutchFeeModal}
        onClose={handleClose}
        // handleProceed={handleProceed}
        // title="Secure your assets"
        infoIcon
        description="Our 1% fee is automatically factored into the swap price you’re receiving."
        btn1="Close"
        btn2="Learn more"
      />
    </>
  );
}

export default InsideQuote;
