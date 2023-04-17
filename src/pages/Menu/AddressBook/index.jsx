import { Box } from "@mui/material";
import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader";
import AddressBookList from "./AddressBookList";
import EmptyAddressBook from "./EmptyAddressBook";

function AddressBook() {
  const [isUserHaveAddress, setIsUserHaveAddress] = useState(true);
  return (
    <>
      <NavigationHeader label="Address Book" info />
      <Box sx={{}}>
        {isUserHaveAddress ? <AddressBookList /> : <EmptyAddressBook />}
      </Box>
    </>
  );
}

export default AddressBook;
