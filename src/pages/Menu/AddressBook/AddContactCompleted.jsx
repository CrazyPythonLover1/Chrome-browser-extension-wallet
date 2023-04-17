import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CompletedCheck from "../../../components/Svg/Icons/CompletedCheck";
import Button from "../../../components/Button";
import Header from "../../../components/Header";
import ReloadIcon from "../../../components/Svg/Icons/Reload";
import styled from "@emotion/styled";

const ReloadIconText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

const ConfirmedText = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_800};
  margin-bottom: 8px;
`;

const Title = styled.div`
  width: 200px;
  text-align: center;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_800};
`;

const NewAddressText = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.key_colors.primary_550};
`;

const AddContactCompleted = () => {
  const theme = useTheme();
  return (
    <>
      <Header page="homepage" />

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
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "36px",
              marginBottom: "24px",
            }}
          >
            <CompletedCheck width="126px" height="88.54" />
          </Box>
          <ConfirmedText>Confirmed</ConfirmedText>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Title> You have successfully added an address</Title>
          </Box>
        </Box>
        <Box>
          <ReloadIconText>
            <ReloadIcon
              style={{ marginRight: "4px" }}
              height="17.5px"
              width="17.43px"
            />
            <NewAddressText>New Address</NewAddressText>
          </ReloadIconText>
          <Button
            size="fullWidth"
            variant="primary"
            label="Home"
            style={{
              marginBottom: "9px",
            }}
            onClick={() => navigate("/")}
          />
        </Box>
      </Box>
    </>
  );
};

export default AddContactCompleted;
