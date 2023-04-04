import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CompletedCheck from "../../../../components/Svg/Icons/CompletedCheck";
import Button from "../../../../components/Button";
import NavigationHeader from "../../../../components/NavigationHeader";

function EmailCompleted() {
  const navigate = useNavigate();
  return (
    <>
      <NavigationHeader label="2 Factor" info />
      <Box
        sx={{
          padding: "16px",
          height: "372px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "52px",
          }}
        >
          <CompletedCheck width="126px" height="88.54" />
        </Box>
        <Button
          size="fullWidth"
          variant="primary"
          label="Home"
          style={{
            marginBottom: "9px",
            // fontSize: "14px",
            // color: theme.palette.text_colors.primary_475,
          }}
          onClick={() => navigate("/")}
        />
      </Box>
    </>
  );
}

export default EmailCompleted;
