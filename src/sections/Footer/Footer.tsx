import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Grid spacing={5} container justifyContent={"center"}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            PRODUCT
          </Typography>
          <Typography py={0.7}>What's new </Typography>
          <Typography py={0.7}>Pricing</Typography>
          <Typography py={0.7}>Get started</Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            HELP
          </Typography>
          <Typography py={0.7}>Demo</Typography>
          <Typography py={0.7}>Report bugs</Typography>
          <Typography py={0.7}>Feedback</Typography>
          <Typography py={0.7}>Support</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            COMPANY
          </Typography>
          <Typography py={0.7}>About</Typography>
          <Typography py={0.7}>Careers – We're hiring!</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
