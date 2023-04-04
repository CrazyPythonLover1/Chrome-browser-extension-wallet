import React from "react";
import NavigationHeader from "../../../components/NavigationHeader";
import { Box, Typography } from "@mui/material";
import { MobileIcon, EmailIcon, GoogleAuthenticatorIcon } from "../../../components/Svg";
import Button from "../../../components/Button";

function TwoFactorAuth() {
  return (
    <>
      <NavigationHeader label="2 Factor" info />
      <Box sx={{ padding: "16px" }}>
        <Typography variant="h5">2-factor authentication</Typography>
        <Typography
          variant="body2"
          sx={{ lineHeight: "22px", marginTop: "4px", marginBottom: "14px" }}
        >
          Select your 2-step verification method below.
        </Typography>
        <Box
          sx={{
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MobileIcon width="15" height="24" />
            <Typography sx={{marginLeft: "12px", fontWeight: "400"}}>Mobile</Typography>
            <Typography sx={{marginLeft: "4px", fontSize: "12px", fontWeight: "400"}}>(+xxx xxxxxxx48)</Typography>
          </Box>
          <Box>
            <Button
              variant="grey"
              label="Add"
              onClick={() => console.log("Button clicked!")}
            />
          </Box>
        </Box>
        <Box
          sx={{
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon width="20" height="16" />
            <Typography sx={{marginLeft: "12px", fontWeight: "400"}}>Email</Typography>
            <Typography sx={{marginLeft: "4px", fontSize: "12px", fontWeight: "400"}}>(example@mail.com)</Typography>
          </Box>
          <Box>
            <Button
              variant="grey"
              label="Add"
              onClick={() => console.log("Button clicked!")}
            />
          </Box>
        </Box>
        <Box
          sx={{
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <GoogleAuthenticatorIcon width="24" height="24"/>
            <Typography sx={{marginLeft: "12px", fontWeight: "400"}}>Google Authenticator</Typography>
          </Box>
          <Box>
            <Button
              variant="grey"
              label="Add"
              onClick={() => console.log("Button clicked!")}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TwoFactorAuth;