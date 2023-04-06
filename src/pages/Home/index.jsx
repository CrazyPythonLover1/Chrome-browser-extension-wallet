import React, { useEffect } from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Dialog from "./components/Dialog";
import { ReceiveIcon, SendIcon } from "../../components/Svg";
import TotalValue from "./components/TotalValue";
import DialogPopup from "../../components/DialogPopup";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 16px;
`;

function HomePage() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleProceed = () => {
    navigate("/security");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Box>
      <Header page="homepage" />
      <Container>
        <TotalValue />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          <Button
            size="normal"
            variant="primary"
            height="44px"
            label="Deposit"
            icon={<ReceiveIcon width="19px" height="18px" />}
            onClick={() => console.log("Button clicked!")}
          />
          <Button
            size="normal"
            variant="primary"
            height="44px"
            label="Send"
            icon={<SendIcon width="19px" height="18px" />}
            onClick={() => console.log("Button clicked!")}
          />
        </Box>

        {/* <Dialog open={open} onClose={handleClose} /> */}
        <DialogPopup
          open={open}
          onClose={handleClose}
          handleProceed={handleProceed}
          title="Secure your assets"
          description="To protect your assets, we recommend setting up guardians and 2-factor
          authentication."
          btn1="Cancel"
          btn2="Proceed"
        />
      </Container>
    </Box>
  );
}

export default HomePage;
