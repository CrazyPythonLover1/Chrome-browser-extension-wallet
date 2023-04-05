import React from "react";
import NavigationHeader from "../../../components/NavigationHeader";
import { Box, Typography, useTheme } from "@mui/material";
import {
  MobileIcon,
  EmailIcon,
  GoogleAuthenticatorIcon,
} from "../../../components/Svg";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const data = [
  {
    type: "Mobile",
    value: "(xxx) xxx-xxxx",
    icon: <MobileIcon width="15" height="24" />,
    path: "/2fa_mobile",
  },
  {
    type: "Email",
    value: "example@mail.com",
    icon: <EmailIcon width="20" height="16" />,
    path: "/2fa_email",
  },
  {
    type: "Google Authenticator",
    value: "",
    icon: <GoogleAuthenticatorIcon width="24" height="24" />,
    path: "/2fa_google_auth",
  },
];

function TwoFactorAuth() {
  const navigate = useNavigate();
  const theme = useTheme();

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
        <Box>
          {data.map((item) => (
            <Box
              key={item.type}
              sx={{
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
                backgroundColor: theme.palette.text_colors.neutral_75,
                borderRadius: "2px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {item.icon}
                <Typography sx={{ marginLeft: "12px", fontWeight: "400" }}>
                  {item.type}
                </Typography>
                {item.value && (
                  <Typography
                    sx={{
                      marginLeft: "4px",
                      fontSize: "12px",
                      fontWeight: "400",
                    }}
                  >
                    ({item.value})
                  </Typography>
                )}
              </Box>
              <Box>
                <Button
                  variant="grey"
                  label="Add"
                  onClick={() => navigate(item.path)}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default TwoFactorAuth;
