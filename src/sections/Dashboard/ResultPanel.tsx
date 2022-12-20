import React from "react";
import { Box } from "@mui/material";

import Alltools from "./Alltools";

type Props = {
  searchTerm: string;
};

const ResultPanel = ({ searchTerm }: Props) => {
  return (
    <Box>{searchTerm.length > 0 ? <p>show results tool</p> : <Alltools />}</Box>
  );
};

export default ResultPanel;
