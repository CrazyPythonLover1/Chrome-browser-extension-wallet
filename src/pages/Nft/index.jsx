import React, { useState } from "react";
import { Grid, useTheme, Container } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import styled from "@emotion/styled";

const InputField = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 16px;
  gap: 8px;
  background: ${({ theme }) => theme.palette.text_colors.neutral_0};
  border: 1px solid ${({ theme }) => theme.palette.text_colors.neutral_275};
  border-radius: 10px;
  caret-color: ${({ theme }) => theme.palette.text_colors.primary_550};
  ::placeholder {
    color: ${({ theme }) => theme.palette.text_colors.neutral_675};
    font-family: "Lato";
    font-size: ${({ theme }) => theme.typography.button.fontSize};
    font-weight: ${({ theme }) => theme.typography.button.fontWeight};
    line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.palette.border_colors.primary_350};
  }
`;

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

// second part
const NftBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  width: 164px;
  height: 172px;
  border: 1px solid #848bed;
  border-radius: 6px;
  margin-top: 16px;
`;

const NameText = styled.div`
height: 24px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
display: flex;
align-items: center;
color: ${({ theme }) => theme.palette.text_colors.neutral_675};
`;

const MoneyText = styled.div`
height: 24px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
display: flex;
align-items: center;
color: ${({ theme }) => theme.palette.key_colors.primary_550};
`;

const nftData = [
  {
    name: "Name",
    image: "https://i.ibb.co/85tk8h3/nft.jpg",
    monety: 12,
  },
  {
    name: "Name",
    image: "https://i.ibb.co/85tk8h3/nft.jpg",
    monety: 12,
  },
  {
    name: "Name",
    image: "https://i.ibb.co/85tk8h3/nft.jpg",
    monety: 12,
  },
  {
    name: "Name",
    image: "https://i.ibb.co/85tk8h3/nft.jpg",
    monety: 12,
  },
];

const Nft = () => {
  const [isNft, setIsNft] = useState(false);
  return (
    <>
      <Header page="homepage" />

      <Box
        sx={{
          padding: "16px",
          // height: "372px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <InputField />

        {isNft ? (
          <>
            <BuyNftText>
              You aren’t holding any NFTs in this wallet. Click the ‘Buy’ button
              below to visit OpenSea.
            </BuyNftText>

            <Button
              size="normal"
              variant="secondary"
              label="Buy NFTs"
              style={{ marginBottom: "9px" }}
              onClick={() => navigate("/")}
            />
          </>
        ) : (
          ""
        )}

        {/* //second part */}
        
        <Grid container md={6} sm={6}>
          {nftData.map((nft, index) => (
            <NftBox key={index}>
              <img
                src={nft.image}
                alt="nft"
                style={{ width: "148px", height: "128px" }}
              />
              <Box style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <NameText>
                  {nft.name}
                </NameText>
                <MoneyText>
                  ${nft.money}k
                </MoneyText>
              </Box>
            </NftBox>
          ))}
        </Grid>

      </Box>
    </>
  );
};

export default Nft;
