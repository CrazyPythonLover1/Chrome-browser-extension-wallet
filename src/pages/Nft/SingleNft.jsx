import React, { useState } from "react";
import { Grid, useTheme, Container } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import styled from "@emotion/styled";
import NavigationHeader from "../../components/NavigationHeader";

const NftContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // height: 372px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ImgTeg = styled.img`
width: 343px;
height: 200px;
border-radius: 6px;
`;

const HeadText = styled.div`
height: 24px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
color: ${({ theme }) => theme.palette.key_colors.primary_550};
`;



const RarityScore = styled.div`
height: 24px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px; 
color: ${({ theme }) => theme.palette.text_colors.neutral_500};
`;

const Score = styled.div`
height: 20px;
font-family: 'Helvetica Neue LT Pro';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
color: ${({ theme }) => theme.palette.text_colors.neutral_800};
`;



const SingleNft = () => {
  return (
    <>
      <NavigationHeader/>

      <NftContainer>
        <ImgTeg src="https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg" alt=""/>

        <Box style={{display:"flex", justifyContent:"space-between", marginTop:"12px"}}>
            <HeadText>Name</HeadText>
            <HeadText>$ 12.00</HeadText>
        </Box>

        <Box style={{marginTop:"8px"}}>
          <RarityScore>Rarity Score</RarityScore>
          <Score>9840.50</Score>
        </Box>


      </NftContainer>

    </>
  );
};

export default SingleNft;