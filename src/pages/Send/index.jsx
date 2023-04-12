import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";

import Header from "../../components/Header";
import Button from "../../components/Button";
import SendPage from "./SendPage";

const Container = styled("div")(({ theme }) => ({
  width: "375px",
  minHeight: "508px",
  // color: theme.palette.background_colors.purple_25
}));

function Send() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Header page="send" />

      <Routes>
        <Route path="home" element={<SendPage />} />
      </Routes>
    </>
  );
}

export default Send;
