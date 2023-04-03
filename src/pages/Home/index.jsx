import React, { useEffect } from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Dialog from "./components/Dialog";
import { ReceiveIcon, SendIcon } from "../../components/Svg";
import TotalValue from "./components/TotalValue";

const Container = styled.div`
  padding: 16px;
`;

function HomePage() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
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
      <Header />
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

        <Dialog open={open} onClose={handleClose} />
      </Container>
    </Box>
  );
}

export default HomePage;
