import React from "react";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import NavigationHeader from "../../../../components/NavigationHeader";
import Button from "../../../../components/Button";
import styled from "@emotion/styled";
import { SettingsIcon } from "../../../../components/Svg";

// svg-color: ${({ theme }) => theme.palette.text_colors.primary_550};
// color: ${({ theme }) => theme.palette.key_colors.neutral_675};

const TopBox = styled.div`
  background: ${({ theme }) => theme.palette.text_colors.neutral_0};
  border: 1.56px solid ${({ theme }) => theme.palette.key_colors.primary_475};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 88px;
  width: 343px;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 16px;
`;
const Title = styled.div`
  font-family: Lato;
  width: 131px;
  height: 22px;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.key_colors.neutral_675};
`;

const SubTitleLeft = styled.div`
  font-family: Lato;
  width: 56px;
  height: 24px;
  line-height: 24px;
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.key_colors.neutral_625};
`;

const SubTitleRight = styled.div`
  font-family: Lato;
  line-height: 22px;
  width: 131px;
  height: 22px;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.key_colors.neutral_675};
`;

const Switcher = styled.div`
  box-sizing: border-box;
  width: 276px;
  height: 32px;
  border: 1px solid #ececee;
  border-radius: 49px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

const SwitcherText = styled.div`
  font-family: Helvetica Neue LT Pro;
  line-height: 20px;
  width: 32px;
  height: 20px;
  line-height: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${({ index, theme }) =>
    index === 0
      ? theme.palette.text_colors.primary_550
      : theme.palette.text_colors.neutral_625};
`;

const AdvanceSettingText = styled.div`
  width: 131px;
  height: 22px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  margin-right: 4px;
  color: ${({ theme }) => theme.palette.text_colors.primary_550};
`;

const TransctionSpeed = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <NavigationHeader label="Transaction Speed" info />

      <Box
        sx={{
          padding: "16px",
          display: "flex",
          height: "372px",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <TopBox>
          <Title sx={{}}>0.0031 ETH $4.52</Title>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SubTitleLeft>Max Fee:</SubTitleLeft>
            <SubTitleRight>0.0045 ETH $5.23</SubTitleRight>
          </Box>
        </TopBox>

        <Switcher>
          <SwitcherText index={0}>Slow</SwitcherText>
          <SwitcherText index={1}>Medium</SwitcherText>
          <SwitcherText index={2}>Fast</SwitcherText>
        </Switcher>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "100px",
          }}
        >
          <AdvanceSettingText>Advanced Settings</AdvanceSettingText>
          <SettingsIcon
            style={{ cursor: "pointer" }}
            Width="24px"
            height="24px"
            onClick={() => navigate("/send/advance_option")}
          />
        </Box>

        {/* save button */}
        <Button
          size="normal"
          variant="secondary"
          label="Save"
          style={{ marginBottom: "9px" }}
          onClick={() => navigate("/")}
        />
      </Box>
    </>
  );
};

export default TransctionSpeed;
