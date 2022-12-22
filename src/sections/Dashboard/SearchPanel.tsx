import React from "react";
import { Box, IconButton, InputBase, SvgIcon } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type Props = {
  searchTerm: string;
  handleSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchInputClick: () => void;
  handleOnClickaway: () => void;
};

const SearchPanel = ({
  searchTerm,
  handleSearchTerm,
  handleSearchInputClick,
  handleOnClickaway,
}: Props) => {
  return (
    <Box sx={{ display: "flex", flexGrow: "1" }}>
      <IconButton>
        <SvgIcon fontSize="small" sx={{ color: "grey.600" }}>
          <path d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6Z"></path>
        </SvgIcon>
      </IconButton>
      <InputBase
        autoFocus
        value={searchTerm}
        onClick={handleSearchInputClick}
        onChange={handleSearchTerm}
        sx={{
          fontSize: "1.18rem",
          fontWeight: "bold",
          color: "grey.800",
        }}
        fullWidth
        placeholder="Search tools..."
      />
      <IconButton onClick={handleOnClickaway}>
        <CloseRoundedIcon />
      </IconButton>
    </Box>
  );
};

export default SearchPanel;
