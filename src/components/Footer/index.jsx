import React, { useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import styled from "@emotion/styled";
import { HomeIcon, NFTIcon, SendIcon, SwapArrowsIcon } from "../Svg";
import { DivFlex } from "..";
import { ACTIVE_TAB } from "../../utils/constant";

const ActionBarElement = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8px;
  font-weight: 700;
  span {
    display: none;
  }
  svg {
    fill: ${({ theme }) => theme.palette.text_colors.neutral_625} !important;
  }
  &.active {
    span {
      display: inline;
      width: 4px;
      height: 4px;
      background-color: ${({ theme }) =>
        theme?.palette.key_colors.primary_550} !important;
      border-radius: 50%;
    }
    svg {
      fill: ${({ theme }) => theme.palette.key_colors.primary_550} !important;
    }
  }
  &.disabled {
    cursor: default;
    svg {
      path.toFill {
        fill: ${({ theme }) => theme?.footer?.disabled};
      }
    }
  }
`;

function Header() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("home");

  const setIconHomeActive = () => {
    // history.push("/");
    setActiveTab(ACTIVE_TAB.HOME);
  };
  const setIconNftActive = () => {
    // history.push("/history");
    setActiveTab(ACTIVE_TAB.NFT);
  };
  const setIconSendActive = () => {
    // history.push("/setting");
    setActiveTab(ACTIVE_TAB.SEND);
  };
  const setIconSwapActive = () => {
    // history.push("/setting");
    setActiveTab(ACTIVE_TAB.SWAP);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "0px",
        width: "100%",
        height: "56px",
      }}
    >
      <DivFlex
        justifyContent="space-around"
        alignItems="center"
        padding="12px 0px"
        style={{
          borderTop: `1px solid ${theme.palette.key_colors.primary_350}`,
        }}
      >
        <ActionBarElement
          className={activeTab === ACTIVE_TAB.HOME && "active"}
          onClick={setIconHomeActive}
        >
          <Box sx={{ marginBottom: "6px" }}>
            <HomeIcon size="" width="20px" height="20px" display="block" />
          </Box>
          <span></span>
        </ActionBarElement>

        <ActionBarElement
          className={activeTab === ACTIVE_TAB.NFT && "active"}
          onClick={setIconNftActive}
        >
          <Box sx={{ marginBottom: "6px" }}>
            <NFTIcon size="" width="20px" height="20px" display="block" />
          </Box>
          <span></span>
        </ActionBarElement>

        <ActionBarElement
          className={activeTab === ACTIVE_TAB.SEND && "active"}
          onClick={setIconSendActive}
        >
          <Box sx={{ marginBottom: "6px" }}>
            <SendIcon size="" width="20px" height="20px" display="block" />
          </Box>
          <span></span>
        </ActionBarElement>

        <ActionBarElement
          className={activeTab === ACTIVE_TAB.SWAP && "active"}
          onClick={setIconSwapActive}
        >
          <Box sx={{ marginBottom: "6px" }}>
            <SwapArrowsIcon
              size=""
              width="20px"
              height="20px"
              display="block"
            />
          </Box>
          <span></span>
        </ActionBarElement>
      </DivFlex>
    </Box>
  );
}

export default Header;
