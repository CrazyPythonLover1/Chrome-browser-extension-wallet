import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DivFlex } from "../../../components";
import NavigationHeader from "../../../components/NavigationHeader";
import {
  HardwareWalletIcon,
  ImportIcon,
  PlusIcon,
} from "../../../components/Svg";

const Wrap = styled.main`
  padding: 16px;
`;

const WalletMethodItem = styled.div`
  width: 100%;
  height: 60px;
  padding: 0px 16px;
  margin-bottom: 8px;
  border: 1px solid
    ${({ theme, index }) =>
      index === 0
        ? theme.palette.key_colors.primary_550
        : theme.palette.text_colors.neutral_275};
  border-radius: 12px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 5px;
  }
  .world_network {
    stroke: ${({ theme }) => theme.palette.key_colors.primary_550};
    fill: white;
  }
`;

const Title = styled.p`
  font-family: "Helvetica Neue LT Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_675};
`;

function Wallets() {
  const navigate = useNavigate();
  const walletConnectionMethods = [
    {
      icon: <ImportIcon />,
      title: "Import Existing Wallet",
      // Subtitle: "Add addresses for easy access",
      route: "/menu/import_wallet",
    },
    {
      icon: <PlusIcon />,
      title: "Create New Wallet",
      // Subtitle: "Import, Create, or Connect Wallets",
      route: "/menu/",
    },
    {
      icon: <HardwareWalletIcon />,
      title: "Connect Hardware Wallet",
      // Subtitle: "Import, Create, or Connect Wallets",
      route: "/menu/",
    },
  ];

  return (
    <>
      <NavigationHeader label="Wallets" info />
      <Wrap>
        {walletConnectionMethods.map((item, index) => (
          <WalletMethodItem
            key={item.title}
            index={index}
            onClick={() => navigate(item.route)}
          >
            <DivFlex alignItems="center">
              {item.icon}
              <Title> {item.title} </Title>
            </DivFlex>
          </WalletMethodItem>
        ))}
      </Wrap>
    </>
  );
}

export default Wallets;
