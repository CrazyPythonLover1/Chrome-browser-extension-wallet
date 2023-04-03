import React from "react";
import Button from "../../components/Button";
import NavigationHeader from "../../components/NavigationHeader";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TwoFAIcon, GuardiansIcon } from "../../components/Svg";

function SecurityPage() {
  const navigate = useNavigate();
  return (
    <>
      <NavigationHeader label="Security" />
      <Box
        sx={{
          padding: "16px",
          position: "relative",
          height: "356px",
        }}
      >
        <Button
          size="normal"
          variant="security"
          height="60px"
          label="Guardians"
          icon={<GuardiansIcon />}
          onClick={() => navigate("/guardians")}
          style={{
            marginBottom: "8px",
          }}
        />

        <Button
          size="normal"
          variant="security"
          height="60px"
          label="2 Factor Authentication"
          icon={<TwoFAIcon />}
          onClick={() => navigate("/2fa")}
        />
        <Button
          size="normal"
          variant="secondary"
          label="Close"
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            left: "0",
            bottom: "25px",
            margin: "0px 16px",
            width: "343px",
          }}
        />
      </Box>
    </>
  );
}

export default SecurityPage;
