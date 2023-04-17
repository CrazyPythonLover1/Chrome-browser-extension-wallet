import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import NavigationHeader from "../../../components/NavigationHeader";
import { CheckIcon, MinusIcon } from "../../../components/Svg";
import { DivFlex } from "../../../components";
import Button from "../../../components/Button";

const MenuWrap = styled.main`
  padding: 0px;
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
  justify-content: space-between;
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

const DetailButton = styled.button`
  padding: 0 8px;
  height: 24px;
  background: ${({ theme }) => theme.palette.background_colors.white};
  border: 1px solid ${({ theme }) => theme.palette.key_colors.primary_350};
  border-radius: 32px;
  color: ${({ theme }) => theme.palette.text_colors.primary_475};
  font-family: "Lato";
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  cursor: pointer;
`;

function NetworkPage() {
  const navigate = useNavigate();
  const networkItems = [
    {
      icon: <CheckIcon />,
      title: "Ethereum",
      // Subtitle: "Add addresses for easy access",
      route: "/menu/network/ethereum",
    },
    {
      icon: <MinusIcon />,
      title: "Polygon",
      // Subtitle: "Import, Create, or Connect Wallets",
      route: "/menu/network/polygon",
    },
  ];

  return (
    <>
      <NavigationHeader label="Networks" info />
      <DivFlex
        flexDirection="column"
        justifyContent="space-between"
        style={{ height: "372px", padding: "16px" }}
      >
        <MenuWrap>
          {networkItems.map((item) => (
            <NetworkItem key={item.title}>
              <DivFlex alignItems="center">
                {item.icon}
                <Title> {item.title} </Title>
              </DivFlex>
              <DetailButton onClick={() => navigate(item.route)}>
                Details
              </DetailButton>
            </NetworkItem>
          ))}
        </MenuWrap>
        <Button
          size="fullWidth"
          variant="secondary"
          label="Add Network Manually"
          onClick={() => navigate("/menu/add_network")}
        />
      </DivFlex>
    </>
  );
}

export default NetworkPage;
