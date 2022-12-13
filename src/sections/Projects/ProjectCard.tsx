import React from "react";
import { Box, Divider, Typography, Stack, IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

const ProjectCard = () => {
  return (
    <Box p={3} borderRadius={"8px"} boxShadow={(theme) => theme.shadows[4]}>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Typography variant="subtitle1">My Project Name</Typography>
        <IconButton sx={{ marginRight: -1.8 }}>
          <MoreVert />
        </IconButton>
      </Stack>
      <Divider />
      <Box>
        <Box my={2}>
          <Typography variant="subtitle2" color="gray.700">
            Product/Brand Name
          </Typography>
          <Typography variant="body2" color="grey.600">
            Marathon the king
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="grey.700">
            Description
          </Typography>
          <Typography variant="body2" color="grey.600">
            The Best writter you ever found in life. Its simple to use and work.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
