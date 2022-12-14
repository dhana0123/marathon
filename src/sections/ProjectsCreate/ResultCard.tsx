import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  FileCopyRounded,
  BookmarkRounded,
  FavoriteRounded,
  CancelRounded,
} from "@mui/icons-material";

const Results = () => {
  return (
    <>
      <Box
        p={2}
        sx={{
          borderRadius: "8px",
          cursor: "pointer",
          "&:hover": { backgroundColor: "grey.200" },
        }}
      >
        <Typography color="grey.700">
          ust a few words can make an impact on your business, help you connect
          with customers and drive more sales. But once you’ve written those
          words, how do you get them in front of the right audience? How can you
          make
        </Typography>
        <Stack spacing={1} direction="row" justifyContent="space-around" mt={2}>
          <Button
            sx={{ fontSize: { xs: "13px", sm: "14px" } }}
            startIcon={<FileCopyRounded fontSize="small" />}
            size="small"
          >
            Copy
          </Button>
          <Button
            sx={{ fontSize: { xs: "13px", sm: "14px" } }}
            startIcon={<BookmarkRounded fontSize="small" />}
            size="small"
          >
            Save
          </Button>
          <Button
            sx={{ fontSize: { xs: "13px", sm: "14px" } }}
            startIcon={<FavoriteRounded fontSize="small" />}
            size="small"
          >
            More Like This
          </Button>
          <Button
            sx={{ fontSize: { xs: "13px", sm: "14px" } }}
            startIcon={<CancelRounded fontSize="small" />}
            size="small"
          >
            Remove
          </Button>
        </Stack>
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
    </>
  );
};

export default Results;
