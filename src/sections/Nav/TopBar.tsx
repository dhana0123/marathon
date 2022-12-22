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
  Menu,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Tooltip,
  MenuItem,
  Typography,
  Zoom,
  ClickAwayListener,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Verified,
  PersonRounded,
  TableRowsRounded,
  LockRounded,
  PersonOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import SearchPanel from "../Dashboard/SearchPanel";
import ResultPanel from "../Dashboard/ResultPanel";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TopBar = ({ setOpen }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [openSearch, setOpenSearch] = React.useState(false);
  const [openResultPanel, setOpenResultPanel] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
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

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ClickAwayListener onClickAway={handleOnClickaway}>
      <Box
        position={"fixed"}
        sx={{
          zIndex: 100,
          background: "white",
          left: { xs: "0px", sm: "260px" },
          right: 0,
          top: 0,
          borderWidth: "2px",
          borderStyle: "dashed",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
        }}
        borderColor={(theme) => theme.palette.grey[300]}
      >
        <Box p={3}>
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
                  handleOnClickaway={handleOnClickaway}
                />
              </Box>
            </Slide>
            <Stack direction="row" alignItems={"center"} spacing={2}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  sx={{
                    backgroundColor: "grey.300",
                  }}
                >
                  <PersonRounded
                    sx={{
                      color: "grey.500",
                      width: "1.3rem",
                      height: "1.3rem",
                    }}
                  />
                </IconButton>
              </Tooltip>

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

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.1))",
                border: `1px solid ${theme.palette.grey[200]}`,

                width: 190,
                mt: 1.5,
                p: 1,
                borderRadius: "16px",
                "& .MuiAvatar-root": {
                  width: 30,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Box
              sx={{
                pb: 1.5,
                px: 0.5,
                borderBottom: `1px dashed ${theme.palette.grey[400]}`,
              }}
            >
              <Typography variant="subtitle2">Email</Typography>
              <Typography variant="caption">BsanthoshDhan@gamil.com</Typography>
            </Box>
            <MenuItem sx={{ borderRadius: "8px", my: 0.5, mt: 1 }}>
              <ListItemIcon>
                <PersonOutlined fontSize="small" sx={{ color: "grey.700" }} />
              </ListItemIcon>
              <Typography variant="subtitle2" color="grey.700">
                Profile
              </Typography>
            </MenuItem>
            <MenuItem sx={{ borderRadius: "8px", my: 0.5 }}>
              <ListItemIcon>
                <SettingsOutlined fontSize="small" sx={{ color: "grey.700" }} />
              </ListItemIcon>
              <Typography variant="subtitle2" color="grey.700">
                Settings
              </Typography>
            </MenuItem>
            <MenuItem sx={{ borderRadius: "8px", mt: 0.5 }}>
              <ListItemIcon>
                <LockRounded fontSize="small" color="error" />
              </ListItemIcon>
              <Typography variant="subtitle2" color="grey.700">
                Logout
              </Typography>
            </MenuItem>
          </Menu>

          <Zoom in={openResultPanel}>
            <Box
              p={3}
              bgcolor="white"
              boxShadow={(theme) => theme.shadows[24]}
              border={(theme) => `1px solid ${theme.palette.grey[200]}`}
              sx={{
                position: "absolute",
                top: "6.2rem",
                left: "1%",
                right: "1%",
                zIndex: 100,
                minHeight: "40vh",
                maxHeight: "60vh",
                overflowY: "scroll",
                borderRadius: "8px",
              }}
            >
              <ResultPanel searchTerm={searchTerm} />
            </Box>
          </Zoom>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default TopBar;
