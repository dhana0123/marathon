import React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import {
  BookmarkAddOutlined,
  FileCopyOutlined,
  FavoriteBorderRounded,
  CancelOutlined,
} from "@mui/icons-material";

type Props = {
  text: string;
};

const Results = ({ text }: Props) => {
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
        <Typography sx={{ fontSize: "1.01rem" }} color="grey.800">
          {text}
        </Typography>
        <Stack
          spacing={1}
          mt={2.2}
          direction="row"
          justifyContent="space-around"
        >
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
