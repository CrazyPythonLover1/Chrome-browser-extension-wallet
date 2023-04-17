import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import MenuPage from "./MenuPage";
import NetworkPage from "./Network/NetworkPage";
import NetworkSelection from "./Network/NetworkSelection";
import AddNetwork from "./Network/AddNetwork";
import NetworkDetail from "./Network/NetworkDetail";
import Wallets from "./Wallets";
import ImportWallet from "./Wallets/ImportWallet";
import AddressBook from "./AddressBook";
import AddContact from "./AddressBook/AddContact";
import AddContactCompleted from "./AddressBook/AddContactCompleted";
import DeleteCompleted from "./AddressBook/DeleteCompleted";

function Menu() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="" element={<MenuPage />} />
        <Route path="network" element={<NetworkPage />} />
        <Route path="network/:network_name" element={<NetworkDetail />} />
        {/* this will be removed  */}
        {/* <Route path="network_selection" element={<NetworkSelection />} /> */}
        <Route path="add_network" element={<AddNetwork />} />
        {/* Menu Wallets  */}
        <Route path="wallets" element={<Wallets />} />
        <Route path="import_wallet" element={<ImportWallet />} />
        {/* Address Book */}
        <Route path="address_book" element={<AddressBook />} />
        <Route path="address_book/add_contact" element={<AddContact />} />
        <Route
          path="address_book/add_contact_completed"
          element={<AddContactCompleted />}
        />
        <Route
          path="address_book/delete_contact_completed"
          element={<DeleteCompleted />}
        />
      </Routes>
    </>
  );
}

export default Menu;
