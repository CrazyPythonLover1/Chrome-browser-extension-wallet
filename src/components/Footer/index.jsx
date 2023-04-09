import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  const setIconHomeActive = () => {
    navigate("/");
    setActiveTab(ACTIVE_TAB.HOME);
  };
  const setIconNftActive = () => {
    // history.push("/history");
    setActiveTab(ACTIVE_TAB.NFT);
  };
  const setIconSendActive = () => {
    navigate("/send/home");
    setActiveTab(ACTIVE_TAB.SEND);
  };
  const setIconSwapActive = () => {
    navigate("/swap/home");
    setActiveTab(ACTIVE_TAB.SWAP);
  };

  const handleTabIcon = (Icon) => {
    return <Icon width="20px" height="20px" display="block" />;
  };

  const tabNames = [
    {
      tabName: ACTIVE_TAB.HOME,
      icon: handleTabIcon(HomeIcon),
      handleClick: setIconHomeActive,
    },
    {
      tabName: ACTIVE_TAB.NFT,
      icon: handleTabIcon(NFTIcon),
      handleClick: setIconNftActive,
    },
    {
      tabName: ACTIVE_TAB.SEND,
      icon: handleTabIcon(SendIcon),
      handleClick: setIconSendActive,
    },
    {
      tabName: ACTIVE_TAB.SWAP,
      icon: handleTabIcon(SwapArrowsIcon),
      handleClick: setIconSwapActive,
    },
  ];

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
        {tabNames.map((item) => (
          <ActionBarElement
            key={item.tabName}
            className={activeTab === item.tabName && "active"}
            onClick={() => item.handleClick()}
          >
            <Box sx={{ marginBottom: "6px" }}>{item.icon}</Box>
            <span></span>
          </ActionBarElement>
        ))}
      </DivFlex>
    </Box>
  );
}

export default Header;
