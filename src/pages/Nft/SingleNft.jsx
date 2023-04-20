import React, { useState } from "react";
import { Grid, useTheme, Container } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { ListIcon, SendIcon } from "../../components/Svg";
import styled from "@emotion/styled";
import NavigationHeader from "../../components/NavigationHeader";

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

const ImgTeg = styled.img`
  width: 343px;
  height: 200px;
  border-radius: 6px;
`;

const HeadText = styled.div`
  height: 24px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.key_colors.primary_550};
`;

const RarityScore = styled.div`
  height: 24px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_500};
`;

const Score = styled.div`
  height: 20px;
  font-family: "Helvetica Neue LT Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_800};
`;

const DescriptionHeadline = styled.div`
  height: 24px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_500};
`;

const DescriptionText = styled.div`
  height: 40px;
  font-family: "Helvetica Neue LT Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_800};
`;

const LinkText = styled.div`
  height: 20px;
  font-family: "Helvetica Neue LT Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) =>
    theme.palette.key_colors_interactions.primary_pressed_550};
`;

const PropertiesHeadline = styled.div`
  height: 24px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_500};
`;

const InputBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 16px;
  width: 100px;
  height: 61px;
  border: 1px solid #e2e2e8;
  border-radius: 10px;
  margin-top: 10px;
`;

const InputHeadline = styled.div`
  height: 24px;
  font-family: "Helvetica Neue LT Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.text_colors.neutral_500};
`;
const InputText = styled.div`
  height: 20px;
  font-family: "Helvetica Neue LT Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.text_colors.neutral_800};
`;

const boxData = [
  {
    headline: "Background",
    color: "red",
  },
  {
    headline: "Heir",
    color: "yellow",
  },
  {
    headline: "Background",
    color: "green",
  },
  {
    headline: "Background",
    color: "white",
  },
  {
    headline: "Background",
    color: "black",
  },
  {
    headline: "Background",
    color: "red",
  },
];

const SingleNft = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavigationHeader />

      <NftContainer>
        <ImgTeg
          src="https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg"
          alt=""
        />

        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "12px",
          }}
        >
          <HeadText>Name</HeadText>
          <HeadText>$ 12.00</HeadText>
        </Box>

        <Box style={{ marginTop: "8px" }}>
          <RarityScore>Rarity Score</RarityScore>
          <Score>9840.50</Score>
        </Box>

        <Box style={{ marginTop: "20px" }}>
          <DescriptionHeadline>Description</DescriptionHeadline>

          <DescriptionText style={{ marginTop: "" }}>
            Rooms is a 3d world that let’s people explore the surreal side of
            the metaverse.
            <LinkText>rooms3d.io</LinkText>
          </DescriptionText>
        </Box>

        {/* box */}
        <Box style={{ marginTop: "36px" }}>
          <PropertiesHeadline>Properties</PropertiesHeadline>

          <Grid
            container
            md={4}
            sm={4}
            sx={{ columnGap: "21px", marginTop: "10px" }}
          >
            {boxData.map((data, index) => (
              <InputBox key={index}>
                <InputHeadline>{data?.headline}</InputHeadline>
                <InputText>{data?.color}</InputText>
              </InputBox>
            ))}
          </Grid>
        </Box>

        {/* button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            marginTop: "52px",
          }}
        >
          <Button
            size="fullWidth"
            variant="secondary"
            height="44px"
            label="Send"
            icon={<SendIcon width="20px" height="18px" />}
            onClick={() => console.log("Button clicked!")}
          />

          <Button
            size="fullWidth"
            variant="secondary"
            height="44px"
            label="List"
            icon={<ListIcon width="20px" height="18px" />}
            onClick={() => navigate("/list")}
          />
        </Box>
      </NftContainer>
    </>
  );
};

export default SingleNft;
