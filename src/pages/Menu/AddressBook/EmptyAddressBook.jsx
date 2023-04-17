import React from "react";
import { Typography } from "@mui/material";
import { DivFlex } from "../../../components";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

function EmptyAddressBook() {
  const navigate = useNavigate();
  return (
    <DivFlex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={{ height: "372px", padding: "16px" }}
    >
      <Typography variant="body2" sx={{ marginBottom: "20px" }}>
        You don’t have any contacts.
      </Typography>
      <Button
        size="fullWidth"
        variant="secondary"
        label="Add contacts"
        onClick={() => navigate("/menu/address_book/add_contact")}
      />
    </DivFlex>
  );
}

export default EmptyAddressBook;
