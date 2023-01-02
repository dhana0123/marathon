import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { Box, SwipeableDrawer, ClickAwayListener } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import SideNavTools from "../sections/Nav/SideNavTools";
import TopBar from "../sections/Nav/TopBar";
import DetailModal from "../sections/DetailTools/DetailModal";
import { addProject } from "../redux/projectSliice";
import { useAppDispatch } from "../redux/store";
import config from "../config";

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

export default function Main() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const projectId = localStorage.getItem("projectId");
    config.axios
      .get(`/project/${projectId}`)
      .then((res) => {
        dispatch(addProject(res.data.project));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <SideNavTools />
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
        <SideNavTools />
      </SwipeableDrawer>
      <Box
        component="main"
        width={"100%"}
        sx={{ position: "relative", background: "#F2F8F9", minHeight: "100vh" }}
      >
        <DetailModal />
        <TopBar />
        <Box height={"87vh"} sx={{ overflowY: "scroll" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
