import React from "react";
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  Button,
  Stack,
  Box,
  Dialog,
  TextField,
  Typography,
} from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ToolsMenu } from "../../components/Nav";
import { tools } from "../../constants";
import NewProjectDialog from "../Projects/NewProjectDialog";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addCurrentDetailTool, selectTool } from "../../redux/toolsSlice";

const SideNavTools = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const { currentDetailTool } = useAppSelector(selectTool);
  const dispatch = useAppDispatch();

  const isSelected = React.useCallback(
    (tool: string) => {
      if (tool === currentDetailTool) {
        return true;
      }
      return false;
    },
    [currentDetailTool]
  );

  const handleClick = React.useCallback(
    (tool: string) => {
      dispatch(addCurrentDetailTool(tool));
      navigate("/");
    },
    [dispatch]
  );

  const handleNewProject = React.useCallback(() => {
    setOpenDialog(true);
  }, [openDialog]);

  return (
    <Box
      sx={{
        width: { xs: "260px" },
        backgroundColor: theme.palette.grey[800],
        height: "100%",
      }}
    >
      <Stack p={2}>
        <Button
          onClick={handleNewProject}
          startIcon={<AddCircle />}
          variant="contained"
        >
          New Project
        </Button>
        <Button
          sx={{ mt: 2 }}
          onClick={() => navigate("/projects")}
          variant="outlined"
        >
          Projects
        </Button>
      </Stack>
      <Typography color="grey.200" variant="subtitle1" px={2}>
        Tools
      </Typography>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        sx={{ py: 1, px: 2, backgroundColor: theme.palette.grey[800] }}
      >
        {(tools || []).map((tool, idx) => (
          <ListItemButton
            sx={{
              borderRadius: "8px",
              p: 1.5,
              py: 1.1,
              my: 1,
            }}
            onClick={() => handleClick(tool.title)}
            selected={isSelected(tool.title)}
          >
            <ListItemIcon>
              <tool.icon
                size="small"
                sx={{
                  width: "1.4rem",
                  height: "1.4rem",
                  color: true
                    ? theme.palette.primary.light
                    : theme.palette.primary.main,
                }}
              />
            </ListItemIcon>
            <Typography
              variant="subtitle2"
              color={isSelected(tool.title) ? "primary.light" : "grey.200"}
              sx={{
                ml: "-1rem",
              }}
            >
              {tool.title}
            </Typography>
          </ListItemButton>
        ))}
      </List>
      <NewProjectDialog open={openDialog} setOpen={setOpenDialog} />
    </Box>
  );
};

export default SideNavTools;
