import React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import bannerimg from "../../assets/images/banner.png";

const Banner = () => {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Stack direction={{ xs: "column", sm: "row" }}>
      <Box width={{ xs: "100%", sm: "30%" }}>
        <Typography
          variant="h1"
          sx={{
            pl: { xs: "0rem", sm: "2rem" },
            pt: { xs: "1rem", sm: "6rem" },
            color: "grey.800",
            textAlign: matches ? "center" : "inherit",
            fontSize: matches ? "3rem" : "4rem",
          }}
        >
          Copywriting Simplified.
        </Typography>
        <Typography sx={{ pl: "2rem" }}>
          No more writer’s block! Create marketing copy in seconds with
          automated creativity tools that inspire and grow your ideas.
        </Typography>
      </Box>
      <Box
        width={{ xs: "100%", sm: "70%" }}
        sx={{ pt: { xs: "2rem", sm: "inherit" } }}
        height="100%"
      >
        <img src={bannerimg} width="100%" />
      </Box>
    </Stack>
  );
};

export default Banner;
