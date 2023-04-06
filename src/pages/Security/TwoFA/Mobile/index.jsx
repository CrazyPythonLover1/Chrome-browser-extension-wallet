import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom";
import NavigationHeader from "../../../../components/NavigationHeader";
import Input from "../../../../components/Input";
// import ModalCustom from "../../../../components/Modal";

function Mobile() {
  const theme = useTheme();
  const navigate = useNavigate();
  
  return (
    <>
      <NavigationHeader label="2 Factor" info />
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
          <Typography variant="h5">Mobile</Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text_colors.neutral_625,
              lineHeight: "22px",
              marginTop: "4px",
              marginBottom: "14px",
            }}
          >
            Insert your mobile phone number below to establish mobile
            authentication.
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: "4px" }}>
            Mobile
          </Typography>
          <Input placeholder="Enter Mobile number" />
        </Box>

        <Button
          size="fullWidth"
          variant="primary"
          label="Verify"
          style={{
            marginBottom: "9px",
            // fontSize: "14px",
            // color: theme.palette.text_colors.primary_475,
          }}
          onClick={() => navigate("/2famobile_otp")}
        />
      </Box>
    </>
  );
}

export default Mobile;
