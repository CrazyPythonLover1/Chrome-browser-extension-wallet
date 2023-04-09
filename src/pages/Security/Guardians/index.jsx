import React from "react";
import { Box, Typography } from "@mui/material";
import NavigationHeader from "../../../components/NavigationHeader";
import Button from "../../../components/Button";
import { LockIcon, NetworkIcon, MetamaskIcon } from "../../../components/Svg";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Guardians() {
  const theme = useTheme();
  const navigate = useNavigate();

  const guardiansList = [
    {
      label: "Clutch Guardian",
      icon: <LockIcon />,
      route: "/clutch_guardian",
    },
    {
      label: "Friends and Family",
      icon: <NetworkIcon />,
      route: "/friends_and_family",
    },
    {
      label: "Other",
      icon: <MetamaskIcon />,
      route: "/other_guardian",
    },
  ];
  return (
    <>
      <NavigationHeader label="Guardians" info />
      <Box
        sx={{
          padding: "16px",
        }}
      >
        <Typography variant="h5">Guardians</Typography>
        <Typography
          variant="body2"
          sx={{ lineHeight: "22px", marginTop: "4px", marginBottom: "14px" }}
        >
          Choose one or more guardians to establish your account recovery.
        </Typography>
        <Box>
          {guardiansList.map((item) => (
            <Button
              key={item.label}
              size="fullWidth"
              variant="security"
              height="56px"
              label={item.label}
              justifyContent="left"
              icon={item.icon}
              onClick={() => navigate(item.route)}
              style={{
                marginBottom: "8px",
                fontSize: "16px",
                lineHeight: "24px",
                color: theme.palette.key_colors.primary_550,
              }}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Guardians;
