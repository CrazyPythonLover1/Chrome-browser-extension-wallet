import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Typography, useTheme } from "@mui/material";
import { DivFlex } from "../../../components";
import NavigationHeader from "../../../components/NavigationHeader";
import Button from "../../../components/Button";

const DetailBox = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.key_colors.primary_350};
  padding: 16px;
  margin-bottom: 14px;
  border-radius: 12px;

  div {
    display: flex;
    justify-content: space-between;

    p:first-of-type {
      line-height: 24px;
    }
  }

  .info {
    margin-bottom: -5px;
    margin-left: 8px;
    cursor: pointer;
  }
`;

function NetworkDetail() {
  const { network_name } = useParams();

  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <NavigationHeader label="Networks" info />
      <DivFlex
        flexDirection="column"
        justifyContent="space-between"
        padding="14px 16px 16px 16px"
        style={{ height: "372px" }}
      >
        <Box>
          <Box>
            <DetailBox>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text_colors.neutral_800,
                  lineHeight: "24px",
                }}
              >
                This will allow Arbitrum One to be used within your Clutch
                Wallet. Note, custom networks are not verified, and may put you
                at risk. Learn more.
              </Typography>
            </DetailBox>

            <DetailBox>
              <DivFlex
                justifyContent="space-between"
                alignItems="center"
                style={{ marginBottom: "10px" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text_colors.neutral_625,
                  }}
                >
                  Name
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text_colors.neutral_675,
                    fontWeight: 600,
                  }}
                >
                  Network Name
                </Typography>
              </DivFlex>

              <DivFlex
                justifyContent="space-between"
                alignItems="center"
                style={{ marginBottom: "10px" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text_colors.neutral_625,
                  }}
                >
                  URL
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text_colors.neutral_675,
                    fontWeight: 600,
                  }}
                >
                  https://arbitrum-mainnet.infura.io
                </Typography>
              </DivFlex>

              <DivFlex
                justifyContent="space-between"
                alignItems="center"
                style={{ marginBottom: "10px" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text_colors.neutral_625,
                  }}
                >
                  Chain ID
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text_colors.neutral_675,
                    fontWeight: 600,
                  }}
                >
                  42161
                </Typography>
              </DivFlex>

              <DivFlex justifyContent="space-between" alignItems="center">
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text_colors.neutral_625,
                  }}
                >
                  Currency symbol
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text_colors.neutral_675,
                    fontWeight: 600,
                  }}
                >
                  ETH
                </Typography>
              </DivFlex>
            </DetailBox>
          </Box>
        </Box>
        <Button
          size="fullWidth"
          variant="secondary"
          label="Approve"
          onClick={() => navigate("/")}
        />
      </DivFlex>
    </>
  );
}

export default NetworkDetail;
