import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = {
  palette: {
    primary: {
      main: "#005249",
      light: "#5BE584",
      lighter: "#C8FACD",
      dark: "#007B55",
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
  },
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
