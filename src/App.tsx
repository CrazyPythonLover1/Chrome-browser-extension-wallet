import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: "375px", height: "508px", borderRadius: "12px" }}>
        <h1 style={{ color: "red" }}> Hello from App.js file   </h1>
        {/* <img src="logo.png" /> */}
      </div>
    </ThemeProvider>
  )
}

export default App