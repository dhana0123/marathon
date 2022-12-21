import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Stack, Box, Typography, Button } from "@mui/material";
import theme, { useTheme } from "@mui/material/styles";

const TopNavbar = () => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const currrentPath = pathname.split("/")[1];
  const navigate = useNavigate();
  console.log(currrentPath);

  return (
    <Container sx={{ backgrouond: "transparent" }}>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        px={1}
        py={2}
      >
        <Box sx={{ width: "200px" }}>Marathon</Box>
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
          <Button variant="text">Login/Signup</Button>
          <Button variant="contained">Start free trial</Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default TopNavbar;
