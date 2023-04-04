import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom";
import NavigationHeader from "../../../../components/NavigationHeader";
import Input from "../../../../components/Input";

function AddGuardian() {
  const theme = useTheme();
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
        <Box>
          <Typography variant="subtitle1" sx={{ marginBottom: "4px" }}>
            Wallet address
          </Typography>
          <Input placeholder="Enter address or ENS" />
        </Box>

        <Button
          size="fullWidth"
          variant="secondary"
          label="Create"
          style={{
            marginBottom: "9px",
            fontSize: "14px",
            color: theme.palette.text_colors.primary_475,
          }}
          // onClick={() => navigate("/add_guardian")}
        />
      </Box>
    </>
  );
}

export default AddGuardian;
