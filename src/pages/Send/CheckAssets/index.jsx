import React from "react";
import NavigationHeader from "../../../components/NavigationHeader";
import { Box, Typography } from "@mui/material";
import Button from "../../../components/Button";
import { useTheme } from "@mui/material";
import { EthIcon, UniIcon, CloseIcon } from "../../../components/Svg";

function CheckAssets() {
  const theme = useTheme();
  const CheckAssetsData = [
    {
      label: "Etherum",
      topValue: 0.028,
      bottomValue: 450.01,
      icon: <EthIcon width="18" height="26" />,
    },
    {
      label: "Uni",
      topValue: 123,
      bottomValue: 1450.01,
      icon: <UniIcon width="18" height="20" />,
    },
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
        <Box
          sx={{
            color: theme.palette.text_colors.primary_550,
            background: theme.palette.text_colors.neutral_0,
            border: `1.56px solid ${theme.palette.key_colors.primary_475}`,
            svgColor: theme.palette.text_colors.primary_550,
            height: "60px",
            borderRadius: "13px",
            boxSizing: "border-box",
            marginBottom: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <EthIcon />{" "}
            <Typography
              sx={{
                height: "24px",
                fontSize: "14px",
                color: theme.palette.text_colors.neutral_800,
                lineHeight: "24px",
                weight: "400",
                marginLeft: "5px",
              }}
            >
              Etherum
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                height: "24px",
                fontSize: "16px",
                color: theme.palette.text_colors.neutral_800,
                lineHeight: "24px",
                weight: "400",
              }}
            >
              0.254 ETH
            </Typography>

            <Typography
              sx={{
                height: "16px",
                fontSize: "12px",
                color: theme.palette.text_colors.neutral_625,
                lineHeight: "16px",
                weight: "400",
              }}
            >
              0.254 USD
            </Typography>
          </Box>
        </Box>

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

export default CheckAssets;
