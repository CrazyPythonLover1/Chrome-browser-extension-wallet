import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const BuyNftText = styled.div`
  font-family: "Helvetica Neue LT Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 89px;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.palette.text_colors.primary_475};
`;

function EmptyNft() {
  const navigate = useNavigate();

  return (
    <>
      <BuyNftText>
        You aren’t holding any NFTs in this wallet. Click the ‘Buy’ button below
        to visit OpenSea.
      </BuyNftText>

      <Button
        size="normal"
        variant="secondary"
        label="Buy NFTs"
        style={{ marginBottom: "9px" }}
        onClick={() => navigate("/")}
      />
    </>
  );
}

export default EmptyNft;
