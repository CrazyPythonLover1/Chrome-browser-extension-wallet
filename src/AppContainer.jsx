import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/index";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";
import Footer from "./components/Footer";
import SecurityPage from "./pages/Security";
import TwoFA from "./pages/Security/TwoFA";
import Guardians from "./pages/Security/Guardians";
import ClutchGuardian from "./pages/Security/Guardians/ClutchGuardian";
import ClutchGuardianViewDetail from "./pages/Security/Guardians/ClutchGuardian/ClutchGuardianViewDetail";
import FriendsAndFamily from "./pages/Security/Guardians/FriendsAndFamily";
import AddGuardian from "./pages/Security/Guardians/FriendsAndFamily/AddGuardian";
import Other from "./pages/Security/Guardians/Other";
import Email from "./pages/Security/TwoFA/Email";
import EmailCompleted from "./pages/Security/TwoFA/Email/EmailCompleted";
import Mobile from "./pages/Security/TwoFA/Mobile";
import MobileOTP from "./pages/Security/TwoFA/Mobile/MobileOTP";
import GoogleAuth from "./pages/Security/TwoFA/GoogleAuth";
import GoogleAuthCode from "./pages/Security/TwoFA/GoogleAuth/GoogleAuthCode";
import EmailEdit from "./pages/Security/TwoFA/Email/EmailEdit";
import SendPage from "./pages/Send";
import Swap from "./pages/Swap";
import ReviewSwap from "./pages/Swap/ReviewSwap";
import Transaction from "./pages/Send/Transaction";
import Quotes from "./pages/Swap/Quotes";
import TransactionSpeed from "./pages/Send/Transaction/TransactionSpeed";
import AdvancedOption from "./pages/Send/Transaction/AdvancedOption";
import SendCompleted from "./pages/Send/SendCompleted";
import CheckAssets from "./pages/CheckAssets";
import InsideQuote from "./pages/Swap/Quotes/InsideQuote";
import Menu from "./pages/Menu";
import Nft from "./pages/Nft";
import SingleNft from "./pages/Nft/SingleNft";
import List from "./pages/Nft/List";

const Container = styled("div")(({ theme }) => ({
  width: "375px",
  minHeight: "508px",
  // color: theme.palette.background_colors.purple_25
}));

function AppContainer() {
  const theme = useTheme();

  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/check_assets" element={<CheckAssets />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/2fa" element={<TwoFA />} />
        <Route path="/guardians" element={<Guardians />} />
        <Route path="/clutch_guardian" element={<ClutchGuardian />} />
        <Route
          path="/clutch_guardian_view_details"
          element={<ClutchGuardianViewDetail />}
        />
        <Route path="/friends_and_family" element={<FriendsAndFamily />} />
        <Route path="/add_guardian" element={<AddGuardian />} />
        <Route path="/other_guardian" element={<Other />} />

        <Route path="/2fa_mobile" element={<Mobile />} />
        <Route path="/2famobile_otp" element={<MobileOTP />} />

        <Route path="/2fa_email" element={<Email />} />
        <Route path="/email_completed" element={<EmailCompleted />} />
        <Route path="/email_edit" element={<EmailEdit />} />

        <Route path="/2fa_google_auth" element={<GoogleAuth />} />
        <Route path="/google_auth_code" element={<GoogleAuthCode />} />

        {/* Nft */}
        <Route path="/nft" element={<Nft />} />
        <Route path="/nft/:singleNft" element={<SingleNft />} />
        <Route path="/list" element={<List />} />

        {/* send pages  */}
        <Route path="send/*" element={<SendPage />} />
        <Route path="/send/transaction" element={<Transaction />} />
        <Route path="/send/transaction_speed" element={<TransactionSpeed />} />
        <Route path="/send/advance_option" element={<AdvancedOption />} />
        <Route path="/send_Completed" element={<SendCompleted />} />

        {/* swap pages  */}
        <Route path="swap/*" element={<Swap />} />
        <Route path="/review_swap" element={<ReviewSwap />} />
        <Route path="/swap/quotes" element={<Quotes />} />
        <Route path="/swap/inside_quote" element={<InsideQuote />} />
        {/* <Route path="/check_assets" element={<CheckAssets />} /> */}
        <Route path="menu/*" element={<Menu />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default AppContainer;
