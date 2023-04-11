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
  font-size: ${({ theme }) => theme.typography.subtitle2.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle2.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle2.lineHeight};
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
      line-height: 24px;
    }
  }

  .info {
    margin-bottom: -5px;
    margin-left: 8px;
    cursor: pointer;
  }
`;

function ReviewSwap() {
  const theme = useTheme();
  const [openSwapRateModal, setOpenSwapRateModal] = React.useState(false);
  const [openGasFeeModal, setOpenGasFeeModal] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenGasFeeModal(false);
    setOpenSwapRateModal(false);
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
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text_colors.neutral_800,
                }}
              >
                You Pay
              </Typography>
              <Box
                sx={{
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <DivFlex justifyContent="space-between" alignItems="center">
                  <EthIcon onClick={() => setOpenSwapRateModal(true)} />
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text_colors.neutral_800,
                    }}
                  >
                    0.85 ETH
                  </Typography>
                </DivFlex>
                <Label>Max 0.0123 ETH</Label>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text_colors.neutral_800,
                }}
              >
                You Receive
              </Typography>

              <DivFlex justifyContent="space-between" alignItems="center">
                <EthIcon onClick={() => setOpenSwapRateModal(true)} />
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text_colors.neutral_800,
                  }}
                >
                  172.23 AXIE
                </Typography>
              </DivFlex>
            </Box>
          </SwapDetails>

          <SwapDetails>
            <Box sx={{ marginBottom: "25px" }}>
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
              <Box
                sx={{
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <DivFlex justifyContent="space-between" alignItems="center">
                  {/* <EthIcon onClick={() => setOpenSwapRateModal(true)} /> */}
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
                <Label
                  style={{
                    display: "block",
                    textAlign: "right",
                    color: theme.palette.text_colors.primary_550,
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/swap/quotes")}
                >
                  See more quotes
                </Label>
              </Box>
            </Box>

            <Box sx={{ marginBottom: "" }}>
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
                  {/* <EthIcon onClick={() => setOpenSwapRateModal(true)} /> */}
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
                <Label
                  style={{
                    display: "block",
                    textAlign: "right",
                    fontSize: "14px",
                    color: theme.palette.text_colors.neutral_675,
                  }}
                >
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
    </>
  );
}

export default ReviewSwap;
