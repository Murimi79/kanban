import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6470cd",
      dark: "#3d4865",
    },
    secondary: {
      main: "#ffffff",
      dark: "#f4f5f7",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;
