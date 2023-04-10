import React from "react";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import NavigationHeader from "../../../../components/NavigationHeader";
import Button from "../../../../components/Button";
import { SettingsIcon } from "../../../../components/Svg";

const TransctionSpeed = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <NavigationHeader label="Transaction Speed" info />

      <Box
        sx={{
          padding: "16px",
          display: "flex",
          height: "372px",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        {/* save button */}
        <Button
          size="normal"
          variant="secondary"
          label="Save"
          style={{ marginBottom: "9px" }}
          onClick={() => navigate("/")}
        />
      </Box>
    </>
  );
};

export default TransctionSpeed;
