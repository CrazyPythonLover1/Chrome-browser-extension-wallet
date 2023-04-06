import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import NavigationHeader from "../../../../components/NavigationHeader";
import { useNavigate } from "react-router-dom";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

function MobileOTP() {
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
            Verify your mobile number by inserting the code below.
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: "4px", fontWeight:'500', fontSize:"14px", width: "343px",color: theme.palette.text_colors.neutral_625 }}>
            6-digit code
          </Typography>
          <Input placeholder="Enter 6-digit code" />
        </Box>

        <Button
          size="fullWidth"
          variant="primary"
          label="Verify"
          style={{
            marginBottom: "9px",
          }}
          onClick={() => navigate("/email_completed")}           
        />
      </Box>
  </>
  );
}

export default MobileOTP;
