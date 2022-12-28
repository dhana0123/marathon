import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Stack,
  Box,
  Typography,
  Button,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
} from "@mui/material";
import theme, { useTheme } from "@mui/material/styles";
import ViewStreamIcon from "@mui/icons-material/ViewStream";

const TopNavbar = () => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const currrentPath = pathname.split("/")[1];
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:600px)");
  const [toggleNav, setToggleNav] = React.useState(false);

  if (matches) {
    return (
      <Box p={2}>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Box onClick={() => navigate("/")}>Marathon</Box>
          <IconButton
            sx={{ backgroundColor: "grey.100" }}
            onClick={() => setToggleNav(true)}
          >
            <ViewStreamIcon sx={{ color: "grey.600" }} />
          </IconButton>
        </Stack>
        <SwipeableDrawer
          anchor={"top"}
          open={toggleNav}
          onClose={() => setToggleNav(false)}
          onOpen={() => setToggleNav(true)}
        >
          <Stack
            direction={"column"}
            justifyContent="center"
            alignItems={"flex-start"}
            spacing={2}
            p={3}
          >
            <Typography
              onClick={() => navigate("/plans")}
              variant={currrentPath === "plans" ? "subtitle1" : "body1"}
              sx={{
                cursor: "pointer",
                transition: theme.transitions.create(["fontSize"]),
              }}
            >
              Pricing
            </Typography>
            <Typography
              onClick={() => navigate("/contact")}
              variant={currrentPath === "contact" ? "subtitle1" : "body1"}
              sx={{
                cursor: "pointer",
                transition: theme.transitions.create(["fontSize"]),
              }}
            >
              Contact
            </Typography>
            <Button variant="outlined" onClick={() => navigate("/login")}>
              Login/Signup
            </Button>
            <Button variant="contained" onClick={() => navigate("/login")}>
              Start free trial
            </Button>
          </Stack>
        </SwipeableDrawer>
      </Box>
    );
  }

  return (
    <Container sx={{ backgrouond: "transparent" }}>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        px={1}
        py={2}
      >
        <Box onClick={() => navigate("/")} sx={{ width: "200px" }}>
          Marathon
        </Box>
        <Stack
          direction={"row"}
          justifyContent="center"
          alignItems={"center"}
          spacing={2}
        >
          <Typography
            onClick={() => navigate("/plans")}
            variant={currrentPath === "plans" ? "subtitle1" : "body1"}
            sx={{
              cursor: "pointer",
              transition: theme.transitions.create(["fontSize"]),
            }}
          >
            Pricing
          </Typography>
          <Typography
            onClick={() => navigate("/contact")}
            variant={currrentPath === "contact" ? "subtitle1" : "body1"}
            sx={{
              cursor: "pointer",
              transition: theme.transitions.create(["fontSize"]),
            }}
          >
            Contact
          </Typography>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems={"center"}
          direction={"row"}
          spacing={2}
        >
          <Button variant="text" onClick={() => navigate("/login")}>
            Login/Signup
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            sx={{ backgroundColor: "grey.800" }}
          >
            Start free trial
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default TopNavbar;
