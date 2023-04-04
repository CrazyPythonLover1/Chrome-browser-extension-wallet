import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Button from "../../../../components/Button";
import { LogoIcon } from "../../../../components/Svg";
import { useNavigate } from "react-router-dom";
import NavigationHeader from "../../../../components/NavigationHeader";
import styled from "@emotion/styled";

const ContactDetails = styled.div`
  padding: 20px 19.5px;
  border: 1px solid ${({ theme }) => theme.palette.key_colors.primary_550};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function ClutchGuardianViewDetail() {
  const navigate = useNavigate();
  const theme = useTheme();
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
          <Typography
            variant="button"
            sx={{
              color: theme.palette.text_colors.neutral_675,
              lineHeight: "20px",
            }}
          >
            Clutch automatically provides guardianship service to help you
            protect your assets.
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              marginTop: "14px",
              marginBottom: "24px",
              color: theme.palette.text_colors.neutral_625,
              lineHeight: "20px",
            }}
          >
            This service works in conjunction with your other guardians and can
            be disabled at any time. You will receive confirmation via text and
            email to authorize a recovery action.
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              marginTop: "0px",
              marginBottom: "14px",
              color: theme.palette.text_colors.neutral_625,
              lineHeight: "20px",
            }}
          >
            Clutch never has access to your wallet, and can never initiate a
            transaction or change to guardianship. Learn more
          </Typography>
        </Box>
        <ContactDetails>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "13px",
            }}
          >
            <Typography
              variant="button"
              sx={{
                color: theme.palette.text_colors.neutral_625,
              }}
            >
              Phone:
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.text_colors.neutral_625,
              }}
            >
              +1 646 388 4923
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="button"
              sx={{
                color: theme.palette.text_colors.neutral_625,
              }}
            >
              Email:
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.text_colors.neutral_625,
              }}
            >
              green_turtle@protonmail.com
            </Typography>
          </Box>
        </ContactDetails>

        <Button
          size="normal"
          variant="secondary"
          label="Disable"
          style={{ marginBottom: "9px" }}
          onClick={() => navigate("/clutch_guardian_view_details")}
        />
      </Box>
    </>
  );
}

export default ClutchGuardianViewDetail;
