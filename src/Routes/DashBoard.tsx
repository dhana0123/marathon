import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { Box, SwipeableDrawer, ClickAwayListener } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import SideNav from "../sections/Nav/SideNav";
import TopBar from "../sections/Nav/TopBar";

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  borderWidth: "1.5px",
  borderColor: theme.palette.grey[400],
  borderStyle: "dashed",
  borderLeft: "none",
  borderTop: "none",
  borderBottom: "none",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function DashBoard() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        <Box sx={{ background: theme.palette.grey[800], height: "100%" }}>
          <DrawerHeader>
            {/* <IconButton onClick={handleDrawer}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton> */}
          </DrawerHeader>
          <SideNav />
        </Box>
      </Drawer>

      <SwipeableDrawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
          height: "100%",
        }}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <SideNav />
      </SwipeableDrawer>
      <Box component="main" width={"100%"} sx={{ position: "relative" }}>
        {/* <TopBar /> */}
        <Box mt={{ xs: 13, sm: 11, background: "#F2F8F9", height: "100%" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
