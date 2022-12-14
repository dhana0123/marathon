import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

const Results = () => {
  return (
    <Box px={4} mt={5}>
      <Stack spacing={4}>
        <Box>
          <Typography color="grey.700">
            ust a few words can make an impact on your business, help you
            connect with customers and drive more sales. But once you’ve written
            those words, how do you get them in front of the right audience? How
            can you make
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            borderWidth: "1.7px",
            borderStyle: "dashed",
            borderColor: "grey.400",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          }}
        ></Box>
        <Box>
          <Typography color="grey.700">
            ust a few words can make an impact on your business, help you
            connect with customers and drive more sales. But once you’ve written
            those words, how do you get them in front of the right audience? How
            can you make
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Results;
