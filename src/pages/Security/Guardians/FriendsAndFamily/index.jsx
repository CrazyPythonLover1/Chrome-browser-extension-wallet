import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "../../../../components/Button";
import { NetworkIcon } from "../../../../components/Svg";
import { useNavigate } from "react-router-dom";
import NavigationHeader from "../../../../components/NavigationHeader";

function FriendsAndFamily() {
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
          <NetworkIcon
            width="31"
            height="31"
            display="block"
            style={{ marginBottom: "21px" }}
          />
          <Typography variant="h5">Friends and Family</Typography>
          <Typography
            variant="body2"
            sx={{ lineHeight: "22px", marginTop: "4px", marginBottom: "14px" }}
          >
            Use friends and family to help secure your wallet and ensure your
            assets are always recoverable.
          </Typography>
          <Typography
            variant="body2"
            sx={{ lineHeight: "22px", marginTop: "4px", marginBottom: "14px" }}
          >
            This must be a Clutch wallet address.
          </Typography>
        </Box>

        <Button
          size="normal"
          variant="primary"
          label="Add Guardian"
          style={{ marginBottom: "9px" }}
          onClick={() => navigate("/add_guardian")}
        />
      </Box>
    </>
  );
}

export default FriendsAndFamily;
