import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom";
import NavigationHeader from "../../../../components/NavigationHeader";
import Input from "../../../../components/Input";
import ModalCustom from "../../../../components/Modal";

function Email() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
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
          <Typography variant="h5">Email</Typography>
          <Typography
            variant="body2"
            sx={{ lineHeight: "22px", marginTop: "4px", marginBottom: "14px" }}
          >
            Insert your email below to establish email authentication.
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: "4px" }}>
            Email
          </Typography>
          <Input placeholder="Enter email address" />
        </Box>

        <Button
          size="fullWidth"
          variant="primary"
          label="Confirm"
          style={{
            marginBottom: "9px",
            // fontSize: "14px",
            // color: theme.palette.text_colors.primary_475,
          }}
          onClick={() => setOpen(true)}
        />
      </Box>
    </>
  );
}

export default Email;
