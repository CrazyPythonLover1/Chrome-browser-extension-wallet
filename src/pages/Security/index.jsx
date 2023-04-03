import React from "react";
import Button from "../../components/Button";
import NavigationHeader from "../../components/NavigationHeader";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SecurityPage() {
  const navigate = useNavigate();
  return (
    <>
      <NavigationHeader label="Security" info />
      <Box sx={{ padding: "16px" }}>
        <Typography>Guardians</Typography>
        <Typography onClick={() => navigate("/2fa")}>
          2 Factor Authentication
        </Typography>
        <Button
          size="normal"
          variant="secondary"
          height="44px"
          label="Close"
          // icon={<SendIcon width="19px" height="18px" />}
          onClick={() => console.log("Button clicked!")}
        />
      </Box>
    </>
  );
}

export default SecurityPage;
