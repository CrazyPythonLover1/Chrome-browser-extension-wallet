import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { ChevronLeftIcon, InfoIcon, CloseIcon } from "../Svg";
import { useNavigate } from "react-router-dom";

function NavigationHeader({ label, info, close }) {
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
        padding: "0px 20px",
        borderBottom: `1px solid ${theme.palette.key_colors.primary_350}`,
      }}
    >
      <Box>
        {!close && (
          <ChevronLeftIcon
            display="block"
            width="7px"
            height="13px"
            onClick={() => navigate(-1)}
            style={{
              cursor: "pointer",
              padding: "16px 16px 16px 4px",
            }}
          />
        )}
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
      <Box>
        {info ? (
          <InfoIcon />
        ) : (
          close && (
            <CloseIcon
              width="14px"
              height="14px"
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer", padding: "10px" }}
            />
          )
        )}
      </Box>
    </Box>
  );
}

export default NavigationHeader;
