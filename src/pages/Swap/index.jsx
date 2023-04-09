import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";

import Header from "../../components/Header";
import SwapPage from "./SwapPage";

const Container = styled("div")(({ theme }) => ({
  width: "375px",
  minHeight: "508px",
  // color: theme.palette.background_colors.purple_25
}));

function Swap() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Header page="send" />

      <Routes>
        <Route path="home" element={<SwapPage />} />
      </Routes>
    </>
  );
}

export default Swap;
