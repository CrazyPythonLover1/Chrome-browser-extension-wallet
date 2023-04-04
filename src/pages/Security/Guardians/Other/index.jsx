import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "../../../../components/Button";
import { MetamaskIcon } from "../../../../components/Svg";
import { useNavigate } from "react-router-dom";
import NavigationHeader from "../../../../components/NavigationHeader";

function Other() {
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
          <MetamaskIcon
            width="31"
            height="31"
            display="block"
            style={{ marginBottom: "21px" }}
          />
          <Typography variant="h5">Other</Typography>
          <Typography
            variant="body2"
            sx={{ lineHeight: "22px", marginTop: "4px", marginBottom: "14px" }}
          >
            Use another wallet external to Clutch to act as our guardian.
          </Typography>
          <Typography
            variant="body2"
            sx={{ lineHeight: "22px", marginTop: "4px", marginBottom: "14px" }}
          >
            &nbsp;1. Visit secure.clutch.xyz <br /> &nbsp;2. Follow instructions
            to add guardian
          </Typography>
        </Box>

        <Button
          size="normal"
          variant="primary"
          label="Secure.clutch.xyz"
          style={{ marginBottom: "9px" }}
          // onClick={() => navigate("/add_guardian")}
        />
      </Box>
    </>
  );
}

export default Other;
