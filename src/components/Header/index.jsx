import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { WalletIcon, MenuIcon, CopyIcon } from "../Svg";

const AccountList = styled("div")(({ theme }) => ({
  width: "154px",
  height: "32px",
  backgroundColor: theme.palette.background_colors.purple_25,
  paddingRight: "12px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: 0,
}));

function Header() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: theme.palette.text_colors.primary_550,
        padding: "8px 16px",
        borderBottom: `1px solid ${theme.palette.key_colors.primary_350}`,
      }}
    >
      <Box>
        <WalletIcon color={theme.palette.key_colors.primary_550} />
      </Box>
      <Box>
        <AccountList>
          <Box>-</Box>
          <Box>Larabae.eth</Box>
          <Box>
            <CopyIcon
              color={theme.palette.key_colors_interactions.primary_hover_550}
              display="block"
              size="15px"
              width="15px"
              height="15px"
            />
          </Box>
        </AccountList>
      </Box>
      <Box>
        <MenuIcon color={theme.palette.key_colors.primary_550} />
      </Box>
    </Box>
  );
}

export default Header;
