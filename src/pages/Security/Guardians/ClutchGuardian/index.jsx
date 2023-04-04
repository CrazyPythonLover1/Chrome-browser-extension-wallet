import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "../../../../components/Button";
import { LogoIcon } from "../../../../components/Svg";
import { useNavigate } from "react-router-dom";
import NavigationHeader from "../../../../components/NavigationHeader";

function ClutchGuardian() {
  const navigate = useNavigate();
  return (
    <>
      <NavigationHeader label="Guardians" info />
      <Box
        sx={{
          padding: "16px",
          height: "372px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box sx={{}}>
          <LogoIcon
            width="31"
            height="33"
            display="block"
            style={{ marginBottom: "21px" }}
          />
          <Typography variant="h5">Clutch Guardian</Typography>
          <Typography
            variant="body2"
            sx={{ lineHeight: "22px", marginTop: "4px", marginBottom: "14px" }}
          >
            Clutch will send you an SMS and email to confirm transactions or
            account recovery.
          </Typography>
        </Box>

        <Button
          size="normal"
          variant="primary"
          label="View details"
          style={{ marginBottom: "9px" }}
          onClick={() => navigate("/clutch_guardian_view_details")}
        />
      </Box>
    </>
  );
}

export default ClutchGuardian;
