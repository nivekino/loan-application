import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5C00",
    },
    secondary: {
      main: "#FF5C00",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif', // Set the global font
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto", sans-serif', // Apply the font to buttons
          textTransform: "none", // Removes uppercase transformation
        },
      },
    },
  },
});

export default theme;
