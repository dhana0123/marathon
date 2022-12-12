import React from "react";
import { Box } from "@mui/material";

type Props = {
  searchTerm: string;
};

const ResultPanel = ({ searchTerm }: Props) => {
  return (
    <Box>
      {searchTerm.length > 0 ? <p>show results tool</p> : <p>all tools</p>}
    </Box>
  );
};

export default ResultPanel;
