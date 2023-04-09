import React from "react";
import { Box, Typography } from "@mui/material";
import NavigationHeader from "../../../components/NavigationHeader";
import Button from "../../../components/Button";
import {
  InformationIcon,
  SettingsIcon,
  EthIcon,
} from "../../../components/Svg";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Transaction() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <NavigationHeader label="Send" info />
      <Box
        sx={{
          padding: "16px",
          display: "flex",
          height: "372px",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        {/* top box */}
        <Box
          sx={{
            background: theme.palette.text_colors.neutral_0,
            border: `1.56px solid ${theme.palette.key_colors.primary_475}`,
            svgColor: theme.palette.text_colors.primary_550,
            display: "flex",
            justifyContent: "space-between",
            height: "120px",
            width: "343px",
            boxSizing: "border-box",
            borderRadius: "12px",
            padding: "16px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                paddingBottom: "16px",
                color: "#272950",
                fontFamily: "Lato",
              }}
            >
              Recepient’s address
            </Typography>

            {/* text + icon */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                paddingBottom: "4px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#272950",
                  paddingRight: "7.3px",
                }}
              >
                Total
              </Typography>
              <InformationIcon width="19.4px" height="19.4px" />
            </Box>
            {/* left bottom text */}
            <Typography
              style={{
                color: theme.palette.text_colors.neutral_625,
                Weight: "400",
                fontSize: "12px",
              }}
            >
              Includes Gas fee
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                paddingBottom: "16px",
                color: "#272950",
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
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#272950",
                }}
              >
                0.028 ETH
              </Typography>
            </Box>
            {/* right bottom text */}
            <Typography
              style={{
                color: theme.palette.text_colors.neutral_625,
                Weight: "400",
                fontSize: "12px",
                textAlign: "right",
              }}
            >
              450.01 USD
            </Typography>
          </Box>
        </Box>

        {/* bottom box */}
        <Box
          sx={{
            // color: theme.palette.text_colors.primary_550,
            background: theme.palette.text_colors.neutral_0,
            border: `1.56px solid ${theme.palette.key_colors.primary_475}`,
            svgColor: theme.palette.text_colors.primary_550,
            display: "flex",
            justifyContent: "space-between",
            height: "120px",
            width: "343px",
            boxSizing: "border-box",
            borderRadius: "12px",
            padding: "16px",
          }}
        >
          {/* left text */}
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#6D6F96",
                }}
              >
                Estimated Gas Fees
              </Typography>
              <InformationIcon
                style={{ paddingLeft: "5px" }}
                width="19.4px"
                height="19.4px"
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
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#6D6F96",
                }}
              >
                Transaction Speed
              </Typography>
              <InformationIcon
                style={{ paddingLeft: "5px" }}
                width="19.4px"
                height="19.4px"
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
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#6D6F96",
                }}
              >
                Clutch Fee
              </Typography>
              <InformationIcon
                style={{ paddingLeft: "5px" }}
                width="19.4px"
                height="19.4px"
              />
            </Box>
          </Box>

          {/* right text */}
          <Box>
            <Typography
              style={{
                color: "#575983",
                fontStyle: "normal",
                fontWeight: "600",
                fontAize: "16px",
                marginBottom: "10px",
              }}
            >
              0.0031 ETH $4.52
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "#6871EA",
                }}
              >
                Normal
              </Typography>

              <SettingsIcon
                style={{ paddingLeft: "4px" }}
                height="24px"
                width="24px"
              />
            </Box>
            <Typography
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                textAlign: "right",
                color: "#575983",
              }}
            >
              1%
            </Typography>
          </Box>
        </Box>

        {/* close button */}
        <Button
          size="normal"
          variant="secondary"
          label="Close"
          style={{ marginBottom: "9px" }}
          onClick={() => navigate("/")}
        />
      </Box>
    </>
  );
}

export default Transaction;
