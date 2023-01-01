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

const TopBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ py: 1, px: 3 }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Box>
          <Typography variant="caption" sx={{ color: "grey.800" }}>
            Project Name
          </Typography>
          <Typography variant="h5">Project Name</Typography>
        </Box>
        <Box>
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
            >
              <TableRowsRounded sx={{ color: "grey.500" }} />
            </IconButton>

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
        </Box>
      </Stack>
    </Box>
  );
};

export default TopBar;
