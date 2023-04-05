import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom";
import NavigationHeader from "../../../../components/NavigationHeader";
import Input from "../../../../components/Input";
import DialogPopup from "../../../../components/DialogPopup";

function GoogleAuthCode() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleVerify = () => {
    if (true) {
      setOpen(true);
    } else {
      navigate("/email_completed");
    }
  };

  const handleProceed = () => {
    navigate("/email_completed");
  };

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
          <Typography variant="h5">Google Authenticator</Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text_colors.neutral_625,
              lineHeight: "22px",
              marginTop: "4px",
              marginBottom: "14px",
            }}
          >
            Verify your Google Authenticator code below.
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: "4px" }}>
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
          onClick={() => handleVerify()}
        />
      </Box>
      <DialogPopup
        open={open}
        onClose={handleClose}
        title="Are you sure?"
        description="Are you sure you want to delete your Google Authentication method? Doing so will disable this 2-factor authentication method."
        btn1="Cancel"
        btn2="Confirm"
        btn2OnClick={handleProceed}
      />
    </>
  );
}

export default GoogleAuthCode;
