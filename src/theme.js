import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f4f5f7",
      dark: "rgba(0, 0, 0, 0.1)",
    },
    secondary: {
      main: "#ffffff",
      dark: "#f3f1f2",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
