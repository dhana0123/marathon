import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import {
  Box,
  SwipeableDrawer,
  Button,
  Snackbar,
  Alert,
  IconButton,
  ClickAwayListener,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet, useLocation } from "react-router-dom";
import SideNavTools from "../sections/Nav/SideNavTools";
import TopBar from "../sections/Nav/TopBar";
import DetailModal from "../sections/DetailTools/DetailModal";
import NewProjectDialog from "../sections/Projects/NewProjectDialog";
import { addProject } from "../redux/projectSliice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import config from "../config";
import { closeSnack, selectSnackbar } from "../redux/SnackMessage";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
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
  const { isModalOpen, message, messageType } = useAppSelector(selectSnackbar);
  const theme = useTheme();
  const containerRef = React.useRef<HTMLDivElement>();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const isCreatePage = () => {
    const path = location.pathname.split("/")[1];
    if (path === "create") {
      return true;
    } else {
      return false;
    }
  };

  isCreatePage();

  const gotToTop = () => {
    containerRef?.current?.scrollTo({ behavior: "smooth", top: 0 });
  };

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
        <Box sx={{ height: "100%" }}>
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
        <ClickAwayListener
          onClickAway={() => {
            setOpen(false);
          }}
        >
          <>
            <SideNavTools />
          </>
        </ClickAwayListener>
      </SwipeableDrawer>
      <Box
        component="main"
        width={"100%"}
        sx={{ position: "relative", background: "#F2F8F9", minHeight: "100vh" }}
      >
        <DetailModal />
        <Box sx={{ position: "relative" }}>
          <Box sx={{ height: "100vh", overflowY: "scroll" }} ref={containerRef}>
            <TopBar setOpen={setOpen} />
            <Outlet />
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              open={isModalOpen}
              autoHideDuration={6000}
              onClose={() => dispatch(closeSnack())}
            >
              <Alert
                onClose={() => dispatch(closeSnack())}
                severity={messageType}
                sx={{ width: "100%" }}
              >
                {message}
              </Alert>
            </Snackbar>
            <NewProjectDialog />
          </Box>
          {isCreatePage() && (
            <IconButton
              onClick={gotToTop}
              sx={{
                position: "absolute",
                bottom: "2rem",
                right: { xs: "1rem", sm: "16rem" },
                backgroundColor: "grey.800",
                color: "white",
                "&:hover": {
                  backgroundColor: "grey.700",
                },
              }}
            >
              <ArrowDropUpIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
}
