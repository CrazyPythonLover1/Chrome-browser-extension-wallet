import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import MenuPage from "./MenuPage";
import NetworkPage from "./Network/NetworkPage";
import NetworkSelection from "./Network/NetworkSelection";
import AddNetwork from "./Network/AddNetwork";
import NetworkDetail from "./Network/NetworkDetail";

function Menu() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="" element={<MenuPage />} />
        <Route path="network" element={<NetworkPage />} />
        <Route path="network/:network_name" element={<NetworkDetail />} />
        <Route path="network_selection" element={<NetworkSelection />} />
        <Route path="add_network" element={<AddNetwork />} />
      </Routes>
    </>
  );
}

export default Menu;
