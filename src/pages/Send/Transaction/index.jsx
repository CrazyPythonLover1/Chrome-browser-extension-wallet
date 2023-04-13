import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import NavigationHeader from "../../../components/NavigationHeader";
import Button from "../../../components/Button";
import {
  infoIcon,
  InformationIcon,
  SettingsIcon,
  EthIcon,
} from "../../../components/Svg";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DivFlex } from "../../../components";
import styled from "@emotion/styled";
import DialogPopup from "../../../components/DialogPopup";

const DetailBox = styled.div`
  background: ${({ theme }) => theme.palette.text_colors.neutral_0};
  border: 1.56px solid ${({ theme }) => theme.palette.key_colors.primary_475};
  display: flex;
  justify-content: space-between;
  // flex-direction: column;
  height: 120px;
  width: 343px;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 14px;
`;

const BoldText675 = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_675};
  margin: 0px;
`;

function Transaction() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [openTotalPopup, setOpenTotalPopup] = useState(false);
  const [openEstimatedPopup, setOpenEstimatePopup] = useState(false);
  const [openTransactionPopup, setOpenTransactionPopup] = useState(false);
  const [openClutchPopup, setOpenClutchPopup] = useState(false);

  const handleClose = () => {
    setOpenTotalPopup(false);
    setOpenEstimatePopup(false);
    setOpenTransactionPopup(false);
    setOpenClutchPopup(false);
  };

  const handleProceed = () => {
    navigate("/");
  };

  return (
    <>
      <NavigationHeader label="Send" info />
      <DivFlex
        justifyContent="space-between"
        flexDirection="column"
        padding="16px"
        style={{
          height: "374px",
        }}
      >
        {/* top box */}
        <Box>
          <DetailBox>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  paddingBottom: "16px",
                  color: theme.palette.text_colors.neutral_800,
                  fontFamily: "Lato",
                }}
              >
                Recepient’s address
              </Typography>

              {/* text + icon */}
              <DivFlex
                justifyContent="start"
                alignItems="center"
                padding=" 0 0 6px 0"
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Lato",
                    color: theme.palette.text_colors.neutral_800,
                    paddingRight: "7.3px",
                  }}
                >
                  Total
                </Typography>
                <InformationIcon
                  style={{ cursor: "pointer" }}
                  width="19.4px"
                  height="19.4px"
                  onClick={() => setOpenTotalPopup(true)}
                />
              </DivFlex>
              {/* left bottom text */}
              <Typography
                variant="subtitle2"
                style={{
                  color: theme.palette.text_colors.neutral_625,
                }}
              >
                Includes Gas fee
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="body1"
                sx={{
                  paddingBottom: "14px",
                  color: theme.palette.text_colors.neutral_800,
                  fontFamily: "Lato",
                }}
              >
                dariadombrovska.eth
              </Typography>

              {/* text + icon */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  paddingBottom: "4px",
                }}
              >
                <EthIcon
                  width="19.4px"
                  height="19.4px"
                  style={{ paddingRight: "4px" }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Lato",
                    color: theme.palette.text_colors.neutral_800,
                  }}
                >
                  0.028 ETH
                </Typography>
              </Box>
              {/* right bottom text */}
              <Typography
                variant="subtitle2"
                style={{
                  color: theme.palette.text_colors.neutral_625,
                  textAlign: "right",
                }}
              >
                450.01 USD
              </Typography>
            </Box>
          </DetailBox>

          {/* bottom box */}
          <DetailBox>
            {/* left text */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  marginBottom: "12px",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Lato",
                    color: theme.palette.text_colors.neutral_625,
                  }}
                >
                  Estimated Gas Fees
                </Typography>
                <InformationIcon
                  style={{ paddingLeft: "5px",  cursor: "pointer"  }}
                  width="19.4px"
                  height="19.4px"
                  onClick={() => setOpenEstimatePopup(true)}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  marginBottom: "12px",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Lato",
                    color: theme.palette.text_colors.neutral_625,
                  }}
                >
                  Transaction Speed
                </Typography>
                <InformationIcon
                  style={{ paddingLeft: "5px",  cursor: "pointer" }}
                  width="19.4px"
                  height="19.4px"
                  onClick={() => setOpenTransactionPopup(true)}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Lato",
                    color: theme.palette.text_colors.neutral_625,
                  }}
                >
                  Clutch Fee
                </Typography>
                <InformationIcon
                  style={{ paddingLeft: "5px",  cursor: "pointer" }}
                  width="19.4px"
                  height="19.4px"
                  onClick={() => setOpenClutchPopup(true)}
                />
              </Box>
            </Box>

            {/* right text */}
            <Box>
              <BoldText675
                style={{
                  marginBottom: "10px",
                }}
              >
                0.0031 ETH $4.52
              </BoldText675>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <BoldText675
                  style={{
                    color: theme.palette.text_colors.primary_550,
                  }}
                >
                  Normal
                </BoldText675>

                <SettingsIcon
                  style={{ paddingLeft: "4px", cursor: "pointer" }}
                  height="24px"
                  width="24px"
                  onClick={() => navigate("/send/transaction_speed")}
                />
              </Box>
              <BoldText675
                style={{
                  textAlign: "right",
                }}
              >
                1%
              </BoldText675>
            </Box>
          </DetailBox>
        </Box>
        {/* close button */}
        <Button
          size="normal"
          variant="secondary"
          label="Close"
          style={{ marginBottom: "9px" }}
          onClick={() => navigate("/")}
        />
      </DivFlex>

      {/*Total dialogue popup */}
      <DialogPopup
        open={openTotalPopup}
        onClose={handleClose}
        // handleProceed={handleProceed}
        // title="Secure your assets"
        infoIcon
        description="The total amount reflects the exact amount that will be sent to the receiving wallet. This includes Clutch’s fee, and network fees."
        btn1="Close"
        btn2="Learn more"
      />
      {/* estimated gas fee  popup */}
      <DialogPopup
        open={openEstimatedPopup}
        onClose={handleClose}
        // handleProceed={handleProceed}
        // title="Secure your assets"
        infoIcon
        description="Gas fees are blockchain transaction fees paid to network validators. This fee is an estimate, and may change at the time of settlement."
        btn1="Close"
        btn2="Learn more"
      />
      {/* Transaction speed popup */}
      <DialogPopup
        open={openTransactionPopup}
        onClose={handleClose}
        // handleProceed={handleProceed}
        // title="Secure your assets"
        infoIcon
        description="Our 1% fee is automatically factored into the swap price you’re receiving."
        btn1="Close"
        btn2="Learn more"
      />

      {/* clutch fee */}
      <DialogPopup
        open={openClutchPopup}
        onClose={handleClose}
        // handleProceed={handleProceed}
        // title="Secure your assets"
        infoIcon
        description="You can choose to apply a higher fee to your transaction, and in doing so, speed it up. On average, transactions process in 12 seconds."
        btn1="Close"
        btn2="Learn more"
      />
    </>
  );
}

export default Transaction;
