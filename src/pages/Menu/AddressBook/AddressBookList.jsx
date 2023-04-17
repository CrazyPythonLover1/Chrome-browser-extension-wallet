import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DivFlex } from "../../../components";
import Button from "../../../components/Button";
import { DeleteIcon, EditIcon, ThreeDotIcon } from "../../../components/Svg";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import ThreeDotPopover from "../../../components/ThreeDotPopover";
import DialogPopup from "../../../components/DialogPopup";

const TextBox = styled.div`
  p:nth-of-type(1) {
    color: ${({ theme }) => theme.palette.text_colors.neutral_800};
  }
  .address {
    color: ${({ theme }) => theme.palette.text_colors.neutral_625};
  }
`;
const ThreeDotBox = styled.div`
  width: 34px;
  height: 34px;
  border: 1px solid ${({ theme }) => theme.palette.text_colors.neutral_225};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
`;

function AddressBookList() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);

  const handleCloseDeletePopup = () => {
    setOpenDeletePopup(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    setOpenDeletePopup(true);
  };

  const handleConfirmDelete = () => {
    navigate("/menu/address_book/delete_contact_completed");
  };

  const options = [
    {
      label: "Edit",
      icon: <EditIcon color={theme.palette.key_colors.primary_550} />,
      route: "/menu/address_book",
    },
    {
      label: "Delete",
      icon: <DeleteIcon color={theme.palette.key_colors.primary_550} />,
      route: "/menu/address_book/",
      onClick: handleDelete,
    },
  ];

  return (
    <DivFlex
      flexDirection="column"
      justifyContent="space-between"
      style={{ height: "372px", padding: "16px" }}
    >
      <Box>
        <Typography variant="subtitle1" sx={{ marginBottom: "12px" }}>
          Current contacts
        </Typography>
        <DivFlex justifyContent="space-between" alignItems="center">
          <DivFlex>
            <Box
              sx={{
                width: "34px",
                height: "34px",
                marginRight: "12px",
                background: theme.palette.key_colors.primary_50,
              }}
            ></Box>

            <TextBox>
              <Typography variant="body2">Arzach</Typography>
              <Typography className="address" variant="subtitle2">
                0x52FD...5186
              </Typography>
            </TextBox>
          </DivFlex>

          <ThreeDotBox onClick={handleClick}>
            <ThreeDotIcon />
          </ThreeDotBox>
          <ThreeDotPopover
            anchorEl={anchorEl}
            handleClose={handleClose}
            options={options}
          />
        </DivFlex>
      </Box>
      <Button
        size="fullWidth"
        variant="secondary"
        label="Add contacts"
        onClick={() => navigate("/menu/address_book/add_contact")}
      />

      <DialogPopup
        open={openDeletePopup}
        onClose={handleCloseDeletePopup}
        title="Delete Contact"
        description="Are you sure you want to delete the contact, Arzach?"
        btn1="Cancel"
        btn2="Confirm"
        btn2OnClick={handleConfirmDelete}
      />
    </DivFlex>
  );
}

export default AddressBookList;
