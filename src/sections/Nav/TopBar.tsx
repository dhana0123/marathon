import React, { FormEvent } from "react";
import {
  Box,
  IconButton,
  Button,
  Stack,
  Snackbar,
  Alert,
  AlertColor,
  Menu,
  ListItemIcon,
  Tooltip,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery,
  InputBase,
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
import { loggedOut } from "../../redux/userSlice";
import Edit from "@mui/icons-material/Edit";
import config from "../../config";
import { selectProject, updageProjectName } from "../../redux/projectSliice";
import { useAppSelector, useAppDispatch } from "../../redux/store";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TopBar = ({ setOpen }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const navigate = useNavigate();
  const { name, id } = useAppSelector(selectProject);
  const dispatch = useAppDispatch();
  const matches = useMediaQuery("(max-width:600px)");

  const [snackOpen, setSnackOpen] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState("");
  const [errorType, setErroType] = React.useState<AlertColor>("success");
  const [isProjectInputFocus, setIsProjectInputFocus] = React.useState(false);
  const projectInput = React.useRef<HTMLFormElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const updateProjectName = React.useCallback(() => {
    setIsProjectInputFocus(false);
    const projectId = localStorage.getItem("projectId");
    config.axios
      .post(`project/${projectId}`, { name })
      .then((res) => {
        setErroType("success");
        setSnackOpen(true);
        setSnackMessage("Project Name Renamed Succesfully");
      })
      .catch((err) => {
        if (err.response.data) {
          setSnackOpen(true);
          setSnackMessage(err.response.data.message);
          setErroType("error");
        }
      });
  }, [name]);

  return (
    <Box
      sx={{
        py: 2,
        px: 3,
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "white",
        borderBottom: "1px solid black",
        borderColor: "grey.200",
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackOpen}
        autoHideDuration={6000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity={errorType}
          sx={{ width: "100%" }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        {id ? (
          <Box>
            <Typography variant="caption" sx={{ color: "grey.800" }}>
              Project Name
            </Typography>

            <Box>
              <InputBase
                inputRef={projectInput}
                required
                onBlur={updateProjectName}
                value={name}
                sx={{
                  color: "grey.800",
                  fontWeight: "bold",
                  pr: 3.7,
                  width: { xs: "8rem", sm: "16rem" },
                  fontSize: { xs: "1.1rem", sm: "1.3rem" },
                  mt: "-.5rem",
                  borderBottom: isProjectInputFocus
                    ? `2px dashed ${theme.palette.grey[500]}`
                    : `1.5px dashed ${theme.palette.grey[300]}`,
                }}
                onChange={(e) => {
                  dispatch(updageProjectName(e.target.value));
                  setIsProjectInputFocus(true);
                }}
              />
              <Edit
                sx={{
                  width: "1.4rem",
                  color: "primary.main",
                  mb: -0.6,
                  ml: "-1.8rem",
                }}
              />
            </Box>
          </Box>
        ) : (
          <Box></Box>
        )}
        <Box>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <IconButton
              onClick={() => {
                setOpen(true);
              }}
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
                    ml: 2,
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
              {!matches ? (
                <Button
                  startIcon={<Verified />}
                  variant="contained"
                  disableElevation
                  onClick={() => navigate("/plans")}
                >
                  Upgrade to Pro
                </Button>
              ) : null}
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
            <MenuItem
              sx={{ borderRadius: "8px", my: 0.5, mt: 1 }}
              onClick={() => {
                navigate("/profile");
              }}
            >
              <ListItemIcon>
                <PersonOutlined fontSize="small" sx={{ color: "grey.700" }} />
              </ListItemIcon>
              <Typography variant="subtitle2" color="grey.700">
                Profile
              </Typography>
            </MenuItem>
            {/* <MenuItem sx={{ borderRadius: "8px", my: 0.5 }}>
              <ListItemIcon>
                <SettingsOutlined fontSize="small" sx={{ color: "grey.700" }} />
              </ListItemIcon>
              <Typography variant="subtitle2" color="grey.700">
                Settings
              </Typography>
            </MenuItem> */}
            <MenuItem
              sx={{ borderRadius: "8px", mt: 0.5 }}
              onClick={() => dispatch(loggedOut())}
            >
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
