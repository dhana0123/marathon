import React from "react";
import {
  Typography,
  Box,
  Stack,
  Tabs,
  Tab,
  Snackbar,
  InputBase,
  Alert,
  AlertColor,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectProject, updageProjectName } from "../../redux/projectSliice";
import config from "../../config";
import {
  Edit,
  MoreVert,
  ModeEditOutlineOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

type Props = {
  setShowSaved: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
};

const ProjectCreateTopBar = ({ setShowSaved, title }: Props) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue === 1) {
      setShowSaved(true);
    } else {
      setShowSaved(false);
    }
  };
  const [snakOpen, setSnakOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [alertType, setAlertType] = React.useState<AlertColor>("success");
  const [isProjectInputFocus, setIsProjectInputFocus] = React.useState(false);
  const { name, id } = useAppSelector(selectProject);
  const dispatch = useAppDispatch();
  const projectInput = React.useRef<HTMLFormElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const open = Boolean(anchorEl);

  const moreMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const moreMenuClose = () => {
    setAnchorEl(null);
  };

  const updateProjectName = React.useCallback(() => {
    setIsProjectInputFocus(false);
    const projectId = localStorage.getItem("projectId");
    config.axios
      .post(`project/${projectId}`, { name })
      .then((res) => {
        setSnakOpen(true);
        setAlertMessage("Project Name Renamed Succesfully");
      })
      .catch((err) => {
        if (err.response.data) {
          setSnakOpen(true);
          setAlertMessage(err.response.data.message);
          setAlertType("error");
        }
      });
  }, [name]);

  const focusProjectNameInput = () => {
    //@ts-ignore
    projectInput.current.focus();
    setIsProjectInputFocus(true);
  };

  return (
    <>
      <Box>
        <Typography variant="h5" color={"primary.main"}>
          {title}
        </Typography>
      </Box>
      <Stack
        py={1}
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={snakOpen}
          autoHideDuration={6000}
          onClose={() => setSnakOpen(false)}
        >
          <Alert
            onClose={() => setSnakOpen(false)}
            severity={alertType}
            sx={{ width: "100%" }}
          >
            {alertMessage}
          </Alert>
        </Snackbar>

        <InputBase
          inputRef={projectInput}
          required
          onBlur={updateProjectName}
          value={name}
          sx={{
            color: "grey.800",
            mt: "-1rem",
            borderBottom: isProjectInputFocus
              ? `1.4px dashed ${theme.palette.grey[400]}`
              : "inherit",
            mr: 3,
          }}
          onChange={(e) => {
            dispatch(updageProjectName(e.target.value));
            setIsProjectInputFocus(true);
          }}
        />

        <Box>
          <Tabs
            sx={{ mt: -6 }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab sx={{ fontSize: "0.85rem" }} label="Create" />
            <Tab sx={{ fontSize: "0.85rem" }} label="Saved" />
          </Tabs>
        </Box>
        {/* <IconButton onClick={moreMenuHandler} sx={{ marginTop: -1.8 }}>
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={moreMenuClose}
        onClick={moreMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.1))",
            border: `1px solid ${theme.palette.grey[200]}`,

            width: 200,
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
        <MenuItem
          sx={{ borderRadius: "8px", my: 0.5, mt: 1 }}
          onClick={focusProjectNameInput}
        >
          <ListItemIcon>
            <ModeEditOutlineOutlined
              sx={{ color: "grey.700", fontSize: "20px" }}
            />
          </ListItemIcon>
          <Typography variant="subtitle2" color="grey.700">
            Rename Project
          </Typography>
        </MenuItem>
        <MenuItem sx={{ borderRadius: "8px", my: 0.5 }}>
          <ListItemIcon>
            <DeleteOutlineOutlined fontSize="small" color="error" />
          </ListItemIcon>
          <Typography variant="subtitle2" color="grey.700">
            Delete Project
          </Typography>
        </MenuItem>
      </Menu> */}
      </Stack>
    </>
  );
};

export default ProjectCreateTopBar;
