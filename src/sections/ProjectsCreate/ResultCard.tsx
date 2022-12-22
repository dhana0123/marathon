import React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import {
  BookmarkAddOutlined,
  FileCopyOutlined,
  FavoriteBorderRounded,
  CancelOutlined,
} from "@mui/icons-material";

const Results = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        py={4}
        px={2}
        sx={{
          border: `1px solid ${theme.palette.grey[200]}`,
          backgroundColor: "white",
          borderRadius: "8px",
          cursor: "pointer",
          "&:hover": { boxShadow: theme.shadows[4] },
        }}
      >
        <Typography variant="body2" color="grey.700">
          ust a few words can make an impact on your business, help you connect
          with customers and drive more sales. But once you’ve written those
          words, how do you get them in front of the right audience? How can you
          make
        </Typography>
        <Stack spacing={1} direction="row" justifyContent="space-around" mt={2}>
          <Button
            sx={{ fontSize: { xs: "13px", sm: "14px" } }}
            startIcon={<FileCopyOutlined fontSize="small" />}
            size="small"
          >
            Copy
          </Button>
          <Button
            sx={{ fontSize: { xs: "13px", sm: "14px" } }}
            startIcon={<BookmarkAddOutlined fontSize="small" />}
            size="small"
          >
            Save
          </Button>
          <Button
            sx={{ fontSize: { xs: "13px", sm: "14px" } }}
            startIcon={<FavoriteBorderRounded fontSize="small" />}
            size="small"
          >
            More Like This
          </Button>
          <Button
            sx={{ fontSize: { xs: "13px", sm: "14px" } }}
            startIcon={<CancelOutlined fontSize="small" />}
            size="small"
          >
            Remove
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Results;
