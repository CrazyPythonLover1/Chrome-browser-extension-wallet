import React from "react";
import NavigationHeader from "../../components/NavigationHeader";
import styled from "@emotion/styled";
import { EthIcon, ChevronDownIcon, SeaIcon } from "../../components/Svg";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "../../components/Button";

const ListContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 372px;
  // overflow-y: scroll;
  // ::-webkit-scrollbar {
  //   display: none;
  // }
`;

const BoxData = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 17px;
  gap: 10px;
  width: 337px;
  height: 265.4px;
  left: 19px;
  top: 169px;
  border: 1px solid #6871ea;
  border: 1px solid ${({ theme }) => theme.palette.key_colors.primary_550};
  border-radius: 12px;
`;

const LeftBoxData = styled.div``;
const RightBoxData = styled.div``;

const SingleList = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavigationHeader label="List" info />

      <ListContainer>
        <BoxData>
          <LeftBoxData></LeftBoxData>
          <RightBoxData></RightBoxData>
        </BoxData>
        {/* button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            marginTop: "240px",
          }}
        >
          <Button
            size="fullWidth"
            variant="secondary"
            height="36px"
            width="163.5px"
            label="Cancel"
            onClick={() => console.log("Button clicked!")}
          />

          <Button
            size="fullWidth"
            variant="secondary"
            height="36px"
            width="163.5px"
            label="Next"
            onClick={() => navigate("/viewOpenSea")}
          />
        </Box>
      </ListContainer>
    </>
  );
};

export default SingleList;
