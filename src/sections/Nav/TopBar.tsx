import React, { FormEvent } from "react";
import {
  Box,
  IconButton,
  Stack,
  InputBase,
  SvgIcon,
  Avatar,
  Button,
  Slide,
  Typography,
  Zoom,
  ClickAwayListener,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Verified, PersonRounded, TableRowsRounded } from "@mui/icons-material";
import SearchPanel from "../Dashboard/SearchPanel";
import ResultPanel from "../Dashboard/ResultPanel";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TopBar = ({ setOpen }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [openSearch, setOpenSearch] = React.useState(false);
  const [openResultPanel, setOpenResultPanel] = React.useState(false);

  const navigate = useNavigate();

  const handleSearchFocus = () => {
    setOpenSearch(true);
  };

  const handleOnClickaway = () => {
    setSearchTerm("");
    setOpenSearch(false);
    setOpenResultPanel(false);
  };

  const handleInputSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    [searchTerm]
  );

  const handleSearchInputClick = React.useCallback(() => {
    setOpenResultPanel(true);
  }, [searchTerm]);

  React.useEffect(() => {
    if (searchTerm.length > 0) {
      setOpenResultPanel(true);
    }
  }, [searchTerm]);

  React.useEffect(() => {
    const interval = setTimeout(() => {
      console.log("search the terms");
    }, 2000);
    return () => clearTimeout(interval);
  }, [searchTerm]);

  return (
    <ClickAwayListener onClickAway={handleOnClickaway}>
      <Box p={3} sx={{ position: "relative" }}>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <IconButton
            sx={{
              backgroundColor: "grey.100",
              display: { xs: "inherit", sm: "none" },
            }}
            onClick={() => setOpen(true)}
          >
            <TableRowsRounded sx={{ color: "grey.500" }} />
          </IconButton>

          <Box sx={{ display: "flex", flexGrow: "1" }}>
            {!openSearch && (
              <>
                <IconButton onClick={handleSearchFocus}>
                  <SvgIcon fontSize="small" sx={{ color: "grey.600" }}>
                    <path d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6Z"></path>
                  </SvgIcon>
                </IconButton>
                <InputBase
                  onFocus={handleSearchFocus}
                  sx={{
                    fontSize: "1.18rem",
                    fontWeight: "bold",
                    color: "grey.700",
                    display: { xs: "none", sm: "block" },
                  }}
                  fullWidth
                  placeholder="Search tools..."
                />
              </>
            )}
          </Box>
          <Slide in={openSearch} direction="down" mountOnEnter unmountOnExit>
            <Box
              p={3}
              boxShadow={(theme) => theme.shadows[20]}
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                background: "rgba( 255, 255, 255, 0.75 )",
                backdropFilter: "blur( 5px )",
                WebkitBackdropFilter: "blur( 20px )",
                border: " 1px solid rgba( 255, 255, 255, 0.18 )",
                zIndex: 100,
              }}
            >
              <SearchPanel
                searchTerm={searchTerm}
                handleSearchTerm={handleInputSearch}
                handleSearchInputClick={handleSearchInputClick}
              />
            </Box>
          </Slide>
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <IconButton
              sx={{
                backgroundColor: "grey.300",
              }}
            >
              <PersonRounded
                sx={{ color: "grey.500", width: "1.3rem", height: "1.3rem" }}
              />
            </IconButton>
            <Button
              startIcon={<Verified />}
              variant="contained"
              disableElevation
              onClick={() => navigate("/plans")}
            >
              Upgrade to Pro
            </Button>
          </Stack>
        </Stack>

        <Zoom in={openResultPanel}>
          <Box
            p={3}
            bgcolor="white"
            boxShadow={(theme) => theme.shadows[24]}
            sx={{
              position: "absolute",
              top: "6.2rem",
              left: "1%",
              right: "1%",
              zIndex: 100,
              borderRadius: "8px",
            }}
          >
            <ResultPanel searchTerm={searchTerm} />
          </Box>
        </Zoom>
      </Box>
    </ClickAwayListener>
  );
};

export default TopBar;
