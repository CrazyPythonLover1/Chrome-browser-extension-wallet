import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import NavigationHeader from "../../components/NavigationHeader";
import {
  AddressBookIcon,
  ConnectWalletIcon,
  LockIcon,
  WorldNetworkIcon,
} from "../../components/Svg";

const MenuWrap = styled.main`
  padding: 16px;
`;

const MenuItem = styled.div`
  width: 100%;
  padding: 16px;
  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.palette.text_colors.neutral_275};
  border-radius: 12px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;

  div {
    margin-top: -2px;
  }
  p {
    margin: 0px;
  }
  svg {
    margin-right: 8px;
  }
  .world_network {
    stroke: ${({ theme }) => theme.palette.key_colors.primary_550};
    fill: white;
  }
`;

const Title = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_675};
`;

const Subtitle = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_675};
`;

function MenuPage() {
  const navigate = useNavigate();
  const MenuItems = [
    {
      icon: <AddressBookIcon />,
      title: "Address book",
      Subtitle: "Add addresses for easy access",
      route: "/menu/address_book",
    },
    {
      icon: <ConnectWalletIcon />,
      title: "Wallets",
      Subtitle: "Import, Create, or Connect Wallets",
      route: "/menu/wallets",
    },
    {
      icon: <LockIcon />,
      title: "Change password",
      Subtitle: "Change your password",
      route: "/menu",
    },
    {
      icon: <WorldNetworkIcon className="world_network" />,
      title: "Network",
      Subtitle: "Add or remove networks",
      route: "/menu/network",
    },
  ];

  return (
    <>
      <NavigationHeader label="Settings" close />
      <MenuWrap>
        {MenuItems.map((menu) => (
          <MenuItem key={menu.title} onClick={() => navigate(menu.route)}>
            {menu.icon}
            <Box>
              <Title> {menu.title} </Title>
              <Subtitle> {menu.Subtitle} </Subtitle>
            </Box>
          </MenuItem>
        ))}
      </MenuWrap>
    </>
  );
}

export default MenuPage;
