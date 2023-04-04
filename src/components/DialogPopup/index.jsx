import React from "react";
import "react-responsive-modal/styles.css";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Button from "../Button";

const Modal = styled.div`
  background-color: ${({ theme }) => theme.palette.text_colors.neutral_0};

  border-radius: 8px;
  padding: 24px;
  box-sizing: border-box;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.15);
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 338px !important;
  height: 288px !important;

  opacity: 0;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  display: none;
  &.show {
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    opacity: 1;
    display: block;
  }
`;

const Overlay = styled.div`
  background-color: rgba(217, 217, 217, 0.8);
  top: 49px;
  bottom: 56px;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 5;
  opacity: 0;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  display: none;
  &.show {
    opacity: 1;
    display: block;
  }
`;

const DivBody = styled.div`
  margin-bottom: 30;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: rgb(226, 226, 226);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(186, 186, 186);
    border-radius: 2px;
  }
`;
const DivFooter = styled.div`
  border-top: 1px solid #dfdfed;
  padding: 1rem;
`;
const TitleHeader = styled.div`
  color: ${({ theme }) => theme?.text?.primary};
  text-align: center;
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 16px;
  padding: 27px 0px;
  border-bottom: 1px solid ${({ theme }) => theme?.border};
  word-break: break-word;
  position: relative;
  ${(props) => props.roundIcon && "padding-top: 60px"}
`;

const CloseIcon = styled.img`
  position: absolute;
  right: 25px;
  width: 12px;
  cursor: pointer;
`;

const RoundIcon = styled.div`
  height: 50px;
  border-radius: 50px;
  position: absolute;
  width: 100%;
  top: -40px;
`;

const DialogPopup = (props) => {
  const {
    open,
    onClose,
    handleProceed,
    closeOnOverlayClick,
    title,
    description,
    btn1,
    btn1OnClick,
    btn2,
    btn2OnClick,
    showCloseIcon,
    roundIcon,
    children,
    footer,
  } = props;

  return (
    <>
      <Modal
        className={open && "show"}
        closeOnOverlayClick={closeOnOverlayClick}
        showCloseIcon={showCloseIcon}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ marginTop: "18px" }}>
              {title}
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{ marginTop: "4px", lineHeight: "22px" }}
            >
              {description}
            </Typography>
          </Box>
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
              label={btn1}
              // icon={<ReceiveIcon width="19px" height="18px" />}
              onClick={() => (btn1OnClick ? btn1OnClick() : onClose())}
            />
            <Button
              size="normal"
              variant="primary"
              label={btn2}
              // icon={<SendIcon width="19px" height="18px" />}
              onClick={() => (btn2OnClick ? btn2OnClick() : handleProceed())}
            />
          </Box>
        </Box>
      </Modal>
      <Overlay className={open ? "show" : ""} onClick={onClose} />
    </>
  );
};

export default DialogPopup;
