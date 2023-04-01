import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";
// import typography_mobile from "./typography_mobile";
// import overrides from "./overrides";
// import overrides_mobile from "./overrides_mobile";

const theme = createTheme({
  palette,
  typography,
  // overrides: overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  breakpoints: {
    values: {
      // mb: 320,
      xs: 480,
      sm: 768,
      md: 1024,
      // def: 1200,
      lg: 1440,
      xl: 1920,
    },
  },
  // variants: {
  //   MuiButton: [
  //     {
  //       props: { variant: "dashed" },
  //       styles: {
  //         padding: "5px 15px",
  //         border: `5px dashed #000000`,
  //       },
  //     },
  //     {
  //       props: { variant: "dashed", color: "secondary" },
  //       styles: {
  //         padding: "5px 15px",
  //         border: `5px dashed #000000`,
  //       },
  //     },
  //   ],
  // },
});

export default theme;
