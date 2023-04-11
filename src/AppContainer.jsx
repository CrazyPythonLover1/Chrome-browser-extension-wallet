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
import TransctionSpeed from "./pages/Send/Transaction/TransctionSpeed";
import AdvancedOption from "./pages/Send/Transaction/AdvancedOption";

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

        {/* send pages  */}
        <Route path="send/*" element={<SendPage />} />
        <Route path="/send/transaction" element={<Transaction />} />
        <Route path="/send/transaction_speed" element={<TransctionSpeed />} />
        <Route path="/send/advance_option" element={<AdvancedOption />} />

        {/* swap pages  */}
        <Route path="swap/*" element={<Swap />} />
        <Route path="/review_swap" element={<ReviewSwap />} />
        <Route path="/swap/quotes" element={<Quotes />} />
        {/* <Route path="/check_assets" element={<CheckAssets />} /> */}
        {/* <Route path="/" element={<EmailEdit />} /> */}
      </Routes>
      <Footer />
    </Container>
  );
}

export default AppContainer;
