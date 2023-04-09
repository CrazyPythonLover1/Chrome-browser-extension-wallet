import { colors } from "@mui/material";

const neutral_interactions_800 = "#090B27";
const neutral_800 = "#272950";
const neutral_675 = "#575983";
const neutral_625 = "#6D6F96";
const neutral_500 = "#A1A2BD";
const neutral_275 = "#E2E2E8";
const neutral_225 = "#ECECEE";
const neutral_75 = "#FBFBFB";
const neutral_0 = "#FFFFFF";
const primary_550 = "#6871EA";
const primary_475 = "#848BED";
const primary_350 = "#ADB1F2";
const primary_50 = "#F5F6FD";
const primary_hover_550 = "#555ED0";
const primary_hover_475 = "#727AEB";
const primary_hover_50 = "#F0F1FC";
const primary_pressed_550 = "#434BB6";
const primary_pressed_475 = "#5F67DD";
const primary_pressed_50 = "#EBECFB";
const semantic_450 = "#108F65";
const semantic_350 = "#E04369";
const semantic_50 = "#F6FCFA";
const white = "#FFFFFF";
const black = "#000000";
const pink = "#D6324B";
const gray = "#44545e";
const white_disable = "rgba(178, 183, 255, 0.2)";

const purple_25 = "rgba(178, 183, 255, 0.2)";
const purple_gradient =
  "linear-gradient(90deg, rgba(241, 196, 220, 0.3) 20%, rgba(127, 86, 217, 0.3) 100%)";

const normal = "#9ea0b7";
const normal_disable = "#8087ed";
const select_title = "#aeaeae";
const checked_color = "#546e7a";
const sidebar_background = white;
const sidebar_active_background = white_disable;
const sidebar_color = normal;
const sidebar_active_color = normal_disable;
const topbar_background = "#FFF";
const main_background = "#FBFBFB";
const pink_disable = "#a02000";
const gray_disable = "#404040";
const mainBackground = white;
const contrastColor = "none";
// const table_head = '#fafafa';
const input_back = white;
const black_white = white;
const sidebar_title_color = "gray";
const sidebar_hover_color = normal_disable;
const sidebar_active_border = normal_disable;
const sidebar_active_font_color = "#3F4271";
const border_color = "#ECECEE";
const blue_dark_border_color = "#848BED";
const blue_light_border_color = "#ADB1F2";
const search_bar_border = "#E2E2E2";
const controller_color = "#8087ed";
const wallet_button_color = "rgba(178, 183, 255, 0.2);";
const blur_background =
  "linear-gradient(174.32deg, #FFFFFF 4.52%, rgba(255, 255, 255, 0) 95.48%)";
const tableMobileHeader = "#e6f2ff";
const text_disable = "#A1A2BD";

declare module '@mui/material/styles' {

  interface Palette {
    key_colors: key_colors;
    key_colors_interactions: key_colors_interactions;
    purple_gradient: purple_gradient;
    text_colors: text_colors;
    background_colors: background_colors;
    border_colors: border_colors;
  }

  interface purple_gradient {
    primary: string;
  }

  interface key_colors {
    primary_550: string;
    primary_475: string;
    primary_350: string;
    primary_50: string;
  }

  interface key_colors_interactions {
    primary_hover_550: string
    primary_hover_475: string
    primary_hover_50: string
    primary_pressed_550: string
    primary_pressed_475: string
    primary_pressed_50: string
  }

  interface text_colors {
    primary_550: string;
    primary_475: string;
    neutral_interactions_800: string;
    neutral_800: string;
    neutral_675: string;
    neutral_625: string;
    neutral_500: string;
    neutral_275: string;
    neutral_225: string;
    neutral_75: string;
    neutral_0: string;
  }

  interface background_colors {
    white: string;
    purple_25: string;
  }

  interface border_colors {
    primary_550: string;
    primary_475: string;
    primary_350: string;
  }

}

export default {
  // neutral_800,
  // neutral_625,
  // neutral_675,
  // neutral_500,
  // neutral_275,
  // neutral_225,
  // neutral_75,
  // primary_550,
  // primary_475,
  // primary_350,
  // primary_50,
  // semantic_450,
  // semantic_350,
  // semantic_50,
  // black,
  // pink,
  // gray,
  // white,
  // white_disable,
  // purple_gradient,
  // normal,
  // normal_disable,
  // select_title,
  // checked_color,
  // sidebar_background,
  // sidebar_active_background,
  // sidebar_color,
  // sidebar_active_color,
  // topbar_background,
  // main_background,
  // pink_disable,
  // gray_disable,
  // mainBackground,
  // contrastColor,
  // // table_head,
  // input_back,
  // black_white,
  // sidebar_title_color,
  // sidebar_hover_color,
  // border_color,
  // sidebar_active_font_color,
  // search_bar_border,
  // sidebar_active_border,
  // controller_color,
  // wallet_button_color,
  // blur_background,
  // tableMobileHeader,
  // blue_dark_border_color,
  // blue_light_border_color,
  // text_disable,
  key_colors: {
    primary_550: primary_550,
    primary_475,
    primary_350,
    primary_50,
  },
  key_colors_interactions: {
    primary_hover_550,
    primary_hover_475,
    primary_hover_50,
    primary_pressed_550,
    primary_pressed_475,
    primary_pressed_50,
  },
  text_colors: {
    primary_550,
    primary_475,
    neutral_interactions_800,
    neutral_800,
    neutral_675,
    neutral_625,
    neutral_500,
    neutral_275,
    neutral_225,
    neutral_75,
    neutral_0,
  },
  background_colors: {
    white,
    purple_25,
  },
  border_colors: {
    primary_475,
    primary_350,
  },
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100],
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue["A400"],
    light: colors.blue["A400"],
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: "#108F65",
    light: "#108F65",
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: primary_550,
    secondary: primary_475,
    link: colors.blue[600],
  },
  background: {
    default: white,
    paper: white,
  },
  purple_gradient: {
    primary: purple_gradient,
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
  button_primary_enable: "#6871EA",
  button_primary_hover: "#555ED0",
  button_primary_pressed: "#434BB6",
  button_primary_disable: "#B0B5F4",
};
