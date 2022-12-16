import React from "react";
import { Box, Stack } from "@mui/material";
import ResultCard from "./ResultCard";

const Results = () => {
  return (
    <Box px={2} mt={5}>
      <Stack spacing={3}>
        {[1, 2, 4].map((item) => (
          <ResultCard key={item} />
        ))}
      </Stack>
    </Box>
  );
};

export default Results;
