import React, { useState } from "react";
import { Grid, useTheme, Container } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import styled from "@emotion/styled";
import EmptyNft from "./EmptyNft";
import SearchInput from "../../components/SearchInput";
import { useEffect } from "react";

const NftContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 372px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const NftCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 164px;
  height: 172px;
  border: 1px solid #848bed;
  border-radius: 6px;
  img {
    width: 148px;
    height: 128px;
    border-radius: 6px;
  }
`;

const NameText = styled.div`
  height: 24px;
  font-family: "Lato";
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
  font-family: "Lato";
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
    tokenId: 1,
    name: "Name",
    image: "https://i.ibb.co/85tk8h3/nft.jpg",
    money: 12,
  },
  {
    tokenId: 2,
    name: "Name",
    image: "https://i.ibb.co/85tk8h3/nft.jpg",
    money: 12,
  },
  {
    tokenId: 3,
    name: "Name",
    image: "https://i.ibb.co/85tk8h3/nft.jpg",
    money: 12,
  },
  {
    tokenId: 4,
    name: "Name",
    image: "https://i.ibb.co/85tk8h3/nft.jpg",
    money: 12,
  },
];

const Nft = () => {
  const navigate = useNavigate();
  const [isUserHasNft, setIsUserHasNft] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsUserHasNft(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Header page="nftpage" />

      <NftContainer>
        <SearchInput placeholder="Search" />

        {isUserHasNft ? (
          <Grid
            container
            md={6}
            sm={6}
            sx={{ columnGap: "15px", rowGap: "12px", marginTop: "16px" }}
          >
            {nftData.map((nft, index) => (
              <NftCard
                key={nft.tokenId}
                onclick={() => navigate(`/nft/${nft.tokenId}`)}
              >
                <img src={nft.image} alt="nft" />
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <NameText>{nft.name}</NameText>
                  <MoneyText>${nft.money}k</MoneyText>
                </Box>
              </NftCard>
            ))}
          </Grid>
        ) : (
          <EmptyNft />
        )}
      </NftContainer>
    </>
  );
};

export default Nft;
