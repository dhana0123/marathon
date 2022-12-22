import { createTheme } from "@mui/material/styles";

const theme = {
  palette: {
    primary: {
      main: "#00AB55",
      light: "#5BE584",
      dark: "#007B55",
      lighter: "#C8FACD",
      darker: "#005249",
    },
    secondary: {
      main: "#3366FF",
      light: "#84A9FF",
      lighter: "#D6E4FF",
      dark: "#1939B7",
      darker: "#091A7A",
    },
    info: {
      main: "#00B8D9",
      light: "#61F3F3",
      lighter: "#CAFDF5",
      dark: "#006C9C",
      darker: "#003768",
    },
    success: {
      main: "#36B37E",
      light: "#86E8AB",
      lighter: "#D8FBDE",
      dark: "#1B806A",
      darker: "#0A5554",
    },
    warning: {
      main: "#FFAB00",
      light: "#FFD666",
      lighter: "#FFF5CC",
      dark: "#B76E00",
      darker: "#7A4100",
    },
    error: {
      main: "#FF5630",
      light: "#FFAC82",
      lighter: "#FFE9D5",
      dark: "#B71D18",
      darker: "#7A0916",
    },
    default: {
      main: "#C4CDD5",
    },
    grey: {
      100: "#F9FAFB",
      200: "#F4F6F8",
      300: "#DFE3E8",
      400: "#C4CDD5",
      500: "#919EAB",
      600: "#637381",
      700: "#454F5B",
      800: "#212B36",
      900: "#161C24",
    },
  },
  typography: {
    fontFamily: "Public Sans",
    fontSize: 16,
    h1: {
      fontFamily: "Public Sans",
      fontSize: 64,
      fontWeight: 800,
      lineHeight: "80px",
      letterSpacing: "0px",
    },
    h2: {
      fontFamily: "Public Sans",
      fontSize: 48,
      fontWeight: 800,
      lineHeight: "64px",
      letterSpacing: "0px",
    },
    h3: {
      fontFamily: "Public Sans",
      fontSize: 32,
      fontWeight: 700,
      lineHeight: "48px",
      letterSpacing: "0px",
    },
    h4: {
      fontFamily: "Public Sans",
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "36px",
      letterSpacing: "0px",
    },
    h5: {
      fontFamily: "Public Sans",
      fontSize: 20,
      fontWeight: 700,
      lineHeight: "30px",
      letterSpacing: "0px",
    },
    h6: {
      fontFamily: "Public Sans",
      fontSize: 18,
      fontWeight: 700,
      lineHeight: "28px",
      letterSpacing: "0px",
    },
    subtitle1: {
      fontFamily: "Public Sans",
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "24px",
      letterSpacing: "0px",
    },
    subtitle2: {
      fontFamily: "Public Sans",
      fontSize: 14,
      fontWeight: 600,
      lineHeight: "22px",
      letterSpacing: "0px",
    },
    body1: {
      fontFamily: "Public Sans",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0px",
    },
    body2: {
      fontFamily: "Public Sans",
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "22px",
      letterSpacing: "0px",
    },
    caption: {
      fontFamily: "Public Sans",
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0px",
    },
    overline: {
      fontFamily: "Public Sans",
      fontSize: 12,
      fontWeight: 700,
      lineHeight: "18px",
      letterSpacing: "0px",
    },
  },
  shadows: {
    0: "none",
    1: "0px 1px 2px rgba(145, 158, 171, 0.16)",
    4: "0px 4px 8px rgba(145, 158, 171, 0.16)",
    8: "0px 8px 16px rgba(145, 158, 171, 0.16)",
    12: "0px 12px 24px -4px rgba(145, 158, 171, 0.16)",
    16: "0px 16px 32px -4px rgba(145, 158, 171, 0.16)",
    20: "0px 20px 40px -4px rgba(145, 158, 171, 0.16)",
    24: " 0px 24px 48px rgba(145, 158, 171, 0.16)",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "capitalize",
          fontSize: "15px",
          fontWeight: 700,
        },
        containedPrimary: {
          "&:hover": {
            boxShadow: "0px 8px 16px rgba(0, 171, 85, 0.24)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
};
// @ts-ignore
export default createTheme(theme);
