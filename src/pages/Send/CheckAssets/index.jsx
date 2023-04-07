import React from "react";
import NavigationHeader from "../../../components/NavigationHeader";
import { Box } from "@mui/material";
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
        <Box>
          {CheckAssetsData.map((item) => (
            <Button
              key={item.label}
              size="normal"
              variant="security"
              height="56px"
              justifyContent="left"
              icon={item.icon}
              label={item.label}
              style={{
                marginBottom: "8px",
                fontSize: "16px",
                lineHeight: "24px",
                color: theme.palette.key_colors.neutral_800,
              }}
            />
          ))}
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
