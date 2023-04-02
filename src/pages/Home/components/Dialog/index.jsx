import * as React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import styled from "@emotion/styled";
import { Dialog, Typography, Box } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "&.MuiDialog-root": {
    "& div": {
      top: "50px",
      height: "405px !important",
      // background: "rgba(217, 217, 217, 0.8)",
    },
    "& .MuiDialog-container": {
      position: "absolute",
      // top: "50px",
      height: "405px !important",
      // background: "white",
      "& .MuiPaper-elevation": {
        top: "0px",
        margin: "0 16px !important",
        height: "288px !important",
        borderRadius: "8px",
        padding: "24px",
      },
    },
  },
}));

export default function DialogModal(props) {
  const { onClose, open } = props;

  let navigate = useNavigate();
  const handleProceed = () => {
    navigate("/security");
  };

  return (
    <BootstrapDialog
      onClose={() => onClose()}
      open={open}
      sx={{
        margin: "0 0px",
      }}
    >
      <Typography variant="h5" sx={{ marginTop: "18px" }}>
        Secure your assets
      </Typography>
      <Typography
        variant="body2"
        component="div"
        sx={{ marginTop: "4px", lineHeight: "22px" }}
      >
        To protect your assets, we recommend setting up guardians and 2-factor
        authentication.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          // marginTop: "16px",
        }}
      >
        <Button
          size="normal"
          variant="grey"
          label="Cancel"
          // icon={<ReceiveIcon width="19px" height="18px" />}
          onClick={() => onClose()}
        />
        <Button
          size="normal"
          variant="primary"
          label="Proceed"
          // icon={<SendIcon width="19px" height="18px" />}
          onClick={() => handleProceed()}
        />
      </Box>
    </BootstrapDialog>
  );
}

DialogModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // selectedValue: PropTypes.string.isRequired,
};
