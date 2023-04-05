import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom";
import NavigationHeader from "../../../../components/NavigationHeader";
import Input from "../../../../components/Input";
import DialogPopup from "../../../../components/DialogPopup";
import { QRIcon } from "../../../../components/Svg";
// import ModalCustom from "../../../../components/Modal";

function GoogleAuth() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleProceed = () => {
    navigate("/google_auth_code");
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
            Open the Google Authenticator app and scan this QR code,
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "24px 0" }}
          >
            <QRIcon width="136px" height="136px" />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text_colors.neutral_625,
              lineHeight: "22px",
              marginTop: "4px",
              marginBottom: "14px",
            }}
          >
            Alternatively, you can enter the follow code manually: 06N6 YMJQ
            Q4SX P6BS TQ2C LFYA BOFA
          </Typography>
        </Box>

        <Button
          size="fullWidth"
          variant="primary"
          label="Next"
          style={{
            marginBottom: "9px",
            // fontSize: "14px",
            // color: theme.palette.text_colors.primary_475,
          }}
          onClick={() => handleProceed()}
        />
      </Box>
    </>
  );
}

export default GoogleAuth;
