import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { DivFlex } from "../../../../components";

function TotalValue() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: "2px solid",
        borderImage: `${theme.palette.purple_gradient.primary} 1`,
        width: "100%",
        height: "79px",
        display: "flex",
        // justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <DivFlex justifyContent="space-between" alignItems="center">
        <Box>$ 2,972.00</Box>
        <Box>
          <Box>+$172.00</Box>
          <Box>5.08%</Box>
        </Box>
      </DivFlex>
    </Box>
  );
}

export default TotalValue;
