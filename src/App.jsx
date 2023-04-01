import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import AppContainer from "./AppContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;
