import * as React from "react";
import Button from "@mui/material/Button";
import {
  Dialog,
  TextField,
  Snackbar,
  DialogActions,
  Alert,
  Box,
  AlertColor,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import config from "../../config";
import { useNavigate } from "react-router-dom";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ResponsiveDialog({ open, setOpen }: Props) {
  const [projectName, setProjectName] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [snackbarOpen, setSnackBarOpen] = React.useState(false);
  const [alertType, setAlertType] = React.useState<AlertColor>("success");
  const [alertMessage, setAlertMessage] = React.useState("");
  const theme = useTheme();
  const navigate = useNavigate();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlCreateProject = () => {
    setLoading(true);
    const userId = localStorage.getItem("userId");
    config.axios
      .put("/project/create", { name: projectName, user: userId })
      .then((res) => {
        setOpen(false);
        setLoading(false);
        if (res.data.result) {
          const { projectId, name } = res.data.result;
          localStorage.setItem("projectId", projectId);
          navigate("projects/create");
        }
        setSnackBarOpen(false);
      })
      .catch((err) => {
        setOpen(false);

        if (err.response.data.errors) {
          setAlertType("error");
          setAlertMessage(err.response.data.errors[0].msg);
          setSnackBarOpen(true);
          setLoading(false);
        } else if (err.message) {
          setAlertType("error");
          setAlertMessage(err.message);
          setSnackBarOpen(true);
          setLoading(false);
        }
      });

    if (alertMessage) {
      setTimeout(() => {
        setSnackBarOpen(false);
      }, 6000);
    }
  };

  const newProjectSnackBarOpen = () => {
    setSnackBarOpen(true);
  };
  const newProjectSnackBarClose = () => {
    setSnackBarOpen(false);
  };
  return (
    <div>
      <Box px={{ xs: 3, sm: "inherit" }}>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={snackbarOpen}
          onClose={newProjectSnackBarClose}
        >
          <Alert severity={alertType} sx={{ width: "100%" }}>
            {alertMessage}
          </Alert>
        </Snackbar>
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
