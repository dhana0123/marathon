import * as React from "react";
import Button from "@mui/material/Button";
import {
  Dialog,
  TextField,
  DialogActions,
  Box,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import config from "../../config";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addProject,
  closeNewProjectModal,
  selectProjectModal,
} from "../../redux/projectSliice";
import { updateSnack } from "../../redux/SnackMessage";

export default function ResponsiveDialog() {
  const open = useAppSelector(selectProjectModal);
  const [projectName, setProjectName] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const dispatch = useAppDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    dispatch(closeNewProjectModal());
    setProjectName("");
  };

  const handlCreateProject = () => {
    setLoading(true);
    const userId = localStorage.getItem("userId");
    config.axios
      .put("/project/create", { name: projectName, user: userId })
      .then((res) => {
        handleClose();
        setLoading(false);
        if (res.data.result) {
          const { projectId, name } = res.data.result;
          localStorage.setItem("projectId", projectId);
          dispatch(addProject({ _id: projectId, ...res.data.result }));
          navigate("/create");
          dispatch(
            updateSnack({
              isModalOpen: true,
              message: "project create succefully",
              messageType: "success",
            })
          );
        }
      })
      .catch((err) => {
        setLoading(false);
        handleClose();
        dispatch(
          updateSnack({
            isModalOpen: true,
            message: err.message,
            messageType: "error",
          })
        );
      });
  };

  return (
    <div>
      <Box px={{ xs: 3, sm: "inherit" }}>
        <Dialog
          PaperProps={{
            sx: {
              position: "absolute",
              top: { xs: "inherit", sm: 70 },
              left: { xs: "inherit", sm: "37%" },
            },
          }}
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            Create New Project
          </DialogTitle>

          <Box sx={{ px: 3, py: 1.5 }}>
            <TextField
              autoFocus
              sx={{ width: { xs: "100%", sm: "30rem" } }}
              required
              id="filled-required"
              label="project Name"
              onChange={(e) => setProjectName(e.target.value)}
              value={projectName}
              variant="outlined"
            />
          </Box>

          <DialogActions sx={{ marginTop: "auto", mb: 1 }}>
            <Button onClick={handleClose}>close</Button>
            <LoadingButton
              loading={loading}
              variant="contained"
              onClick={handlCreateProject}
            >
              Create Project
            </LoadingButton>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
}
