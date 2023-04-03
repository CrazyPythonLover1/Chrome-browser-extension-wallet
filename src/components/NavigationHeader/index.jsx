import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { ChevronLeftIcon, InfoIcon } from "../Svg";
import { useNavigate } from "react-router-dom";

function NavigationHeader({ label, info }) {
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: theme.palette.text_colors.primary_550,
        height: "48px",
        padding: "8px 20px",
        borderBottom: `1px solid ${theme.palette.key_colors.primary_350}`,
      }}
    >
      <Box>
        <ChevronLeftIcon
          display="block"
          width="7px"
          height="13px"
          onClick={() => navigate(-1)}
        />
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Lato",
          }}
        >
          {label}
        </Typography>
      </Box>
      <Box>{info && <InfoIcon />}</Box>
    </Box>
  );
}

export default NavigationHeader;
