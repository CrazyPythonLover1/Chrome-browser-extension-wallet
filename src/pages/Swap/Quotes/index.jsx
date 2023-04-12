import React from "react";
import { Box, Typography } from "@mui/material";
import NavigationHeader from "../../../components/NavigationHeader";
import Button from "../../../components/Button";
import { LockIcon, NetworkIcon, MetamaskIcon } from "../../../components/Svg";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DivFlex } from "../../../components";
import DialogPopup from "../../../components/DialogPopup";

function Quotes() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [openInfoModal, setOpenInfoModal] = React.useState(false);

  const quoteList = [
    {
      label: "Best Price",
      amount: "202.23 AXIE",
      icon: <LockIcon />,
      btnText: "AGG",
      route: "/clutch_guardian",
    },
    {
      label: "Best Price",
      amount: "202.23 AXIE",
      icon: <NetworkIcon />,
      btnText: "RFQ",
      route: "/friends_and_family",
    },
  ];

  const handleNavigate = (btnText) => {
    if (btnText.toLowerCase() === "agg") {
      navigate("/swap/inside_quote");
    }
  };

  const handleClose = () => {
    setOpenInfoModal(false);
  };

  const infoHandler = () => {
    setOpenInfoModal(true);
  };

  return (
    <>
      <NavigationHeader label="Quotes" info infoHandler={infoHandler} />
      <DivFlex
        justifyContent="space-between"
        flexDirection="column"
        padding="16px"
        style={{
          height: "374px",
        }}
      >
        {/* <Typography variant="h5">Guardians</Typography>
        <Typography
          variant="body2"
          sx={{ lineHeight: "22px", marginTop: "4px", marginBottom: "14px" }}
        >
          Choose one or more guardians to establish your account recovery.
        </Typography> */}
        <Box>
          {quoteList.map((item, index) => (
            <DivFlex
              justifyContent="space-between"
              padding="18px 16px"
              style={{
                marginBottom: "8px",
                fontSize: "16px",
                lineHeight: "24px",
                color: theme.palette.key_colors.primary_550,
                border: `1px solid ${theme.palette.key_colors.primary_475}`,
                borderRadius: "13px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  lineHeight: "24px",
                }}
              >
                {item.amount}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: theme.palette.text_colors.neutral_675,
                }}
              >
                {item.label}
              </Typography>
              <Button
                height="24px"
                color={theme.palette.text_colors.primary_475}
                background={theme.palette.text_colors.neutral_0}
                border={`1px solid ${
                  index === 0
                    ? theme.palette.key_colors.primary_350
                    : index === 1 && theme.palette.warning.main
                }`}
                label={item.btnText}
                onClick={() => handleNavigate(item.btnText)}
              />
            </DivFlex>
          ))}
        </Box>

        <Button
          size="fullWidth"
          variant="secondary"
          label="Swap"
          onClick={() => navigate("/swap")}
        />
      </DivFlex>
      <DialogPopup
        open={openInfoModal}
        onClose={handleClose}
        infoIcon
        description="We receive quotes from multiple liquidity providers to ensure you’re getting the best price possilbe."
        btn1="Close"
        btn2="Learn more"
      />
    </>
  );
}

export default Quotes;
