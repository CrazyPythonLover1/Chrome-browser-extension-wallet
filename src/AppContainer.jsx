import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/index";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  width: "375px",
  minHeight: "508px",
  // color: theme.palette.background_colors.purple_25
}));

function AppContainer() {
  const theme = useTheme();

  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Container>
  );
}

export default AppContainer;
