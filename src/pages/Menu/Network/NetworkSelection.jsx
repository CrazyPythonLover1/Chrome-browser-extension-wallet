import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import NavigationHeader from "../../../components/NavigationHeader";
import { PlusIcon } from "../../../components/Svg";
import { DivFlex } from "../../../components";

const Wrap = styled.main`
  padding: 16px;
`;

const NetworkItem = styled.div`
  width: 100%;
  height: 60px;
  padding: 0px 16px;
  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.palette.text_colors.neutral_275};
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

function NetworkSelection() {
  const navigate = useNavigate();
  const networkItems = [
    {
      icon: <PlusIcon />,
      title: "Arbitrum One",
      // Subtitle: "Add addresses for easy access",
      route: "/menu/network/ethereum",
    },
    {
      icon: <PlusIcon />,
      title: "Avalanche Network C-Chain",
      // Subtitle: "Import, Create, or Connect Wallets",
      route: "/menu/network/polygon",
    },
    {
      icon: <PlusIcon />,
      title: "BNB Smart Chain",
      // Subtitle: "Import, Create, or Connect Wallets",
      route: "/menu/network/polygon",
    },
    {
      icon: <PlusIcon />,
      title: "Fantom Opera",
      // Subtitle: "Import, Create, or Connect Wallets",
      route: "/menu/network/polygon",
    },
  ];

  return (
    <>
      <NavigationHeader label="Add Network Manually" info />
      <Wrap>
        {networkItems.map((item) => (
          <NetworkItem key={item.title} onClick={() => navigate(item.route)}>
            <DivFlex alignItems="center">
              {item.icon}
              <Title> {item.title} </Title>
            </DivFlex>
          </NetworkItem>
        ))}
      </Wrap>
    </>
  );
}

export default NetworkSelection;
