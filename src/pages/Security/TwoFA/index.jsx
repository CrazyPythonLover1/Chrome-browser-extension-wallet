import React from "react";
import NavigationHeader from "../../../components/NavigationHeader";
import { Box, Typography } from "@mui/material";

function TwoFactorAuth() {
  return (
    <>
      <NavigationHeader label="2 Factor" info />

      <Box sx={{
          padding: "16px",
        }}>
          <Typography variant="h5">2-factor authentication</Typography>
          <Typography
          variant="body2"
          sx={{ lineHeight: "22px", marginTop: "4px", marginBottom: "14px" }}
        >
          Select your 2-step verification method below.
        </Typography>

        <Box sx={{
          padding: "16px",
          display: "flex",
          justifyContent: "space-between"
        }}>
          <Box>icon + text</Box>
          <Box>button</Box>
        </Box>

        <Box sx={{
          padding: "16px",
          display: "flex",
          justifyContent: "space-between"
        }}>
          <Box>icon + text</Box>
          <Box>button</Box>
        </Box>

        <Box sx={{
          padding: "16px",
          display: "flex",
          justifyContent: "space-between"
        }}>
          <Box>icon + text</Box>
          <Box>button</Box>
        </Box>
      </Box>
      

    </>
  );
}

export default TwoFactorAuth;
