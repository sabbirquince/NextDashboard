import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#663399",
      light: "#7D48B1",
    },
    secondary: {
      main: "#F1F3F4",
    },
    warning: {
      main: "#FFC620",
      light: "#FFF6E0",
    },
    info: {
      main: "#3981F7",
      light: "#C5DBFF",
    },

    success: {
      main: "#5DAE49",
      light: "#BCDDB3",
    },
    error: {
      main: red.A400,
    },
    grey: {
      A700: "#949494",
      A400: "#43454D",
    },
  },

  typography: {
    fontFamily: "Nunito Sans",
  },
  shape: {
    borderRadius: "20px",
  },
});

export default theme;
