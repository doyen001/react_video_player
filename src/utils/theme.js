import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      lighter: "#555555",
      light: "#2c2c2c",
      main: "#00000",
      dark: "#00000",
      darker: "#00000",
    },
    secondary: {
      lighter: "#99a8e3",
      light: "#6979b1",
      main: "#3a4d81",
      dark: "#022654",
      darker: "#00002b",
    },
  },

  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          transform: `translate(20px, 13px) scale(1) !important`,
          "&.MuiInputLabel-shrink": {
            transform: `translate(26px, -9px) scale(0.8) !important`,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: `25px !important`,
          height: `50px !important`,
          "& fieldset": {
            padding: `0px 20px`,
          },
        },
        input: {
          padding: `12.5px 20px !important`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: `25px`,
          textTransform: "none",
          fontWeight: "bold"
        },
        sizeLarge: {
          height: "48px",
          padding: "0 30px",
          fontSize: "18px"
        },
      },
    },
  },
});

export default theme;
