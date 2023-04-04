import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/index";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";
import Footer from "./components/Footer";
import SecurityPage from "./pages/Security";
import TwoFA from "./pages/Security/TwoFA";
import Guardians from "./pages/Security/Guardians";
import ClutchGuardian from "./pages/Security/Guardians/ClutchGuardian";
import ClutchGuardianViewDetail from "./pages/Security/Guardians/ClutchGuardian/ClutchGuardianViewDetail";
import FriendsAndFamily from "./pages/Security/Guardians/FriendsAndFamily";
import AddGuardian from "./pages/Security/Guardians/FriendsAndFamily/AddGuardian";

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
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/2fa" element={<TwoFA />} />
        <Route path="/guardians" element={<Guardians />} />
        <Route path="/clutch_guardian" element={<ClutchGuardian />} />
        <Route
          path="/clutch_guardian_view_details"
          element={<ClutchGuardianViewDetail />}
        />
        <Route path="/friends_and_family" element={<FriendsAndFamily />} />
        <Route path="/add_guardian" element={<AddGuardian />} />
        {/* <Route path="/" element={<AddGuardian />} /> */}
      </Routes>
      <Footer />
    </Container>
  );
}

export default AppContainer;
