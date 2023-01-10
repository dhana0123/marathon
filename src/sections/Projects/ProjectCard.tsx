import React from "react";
import {
  Box,
  Divider,
  Typography,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import {
  MoreVert,
  ModeEditOutlineOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";
import moment from "moment";
import { useTheme } from "@mui/material/styles";
import { Project } from "../../definations/project";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addProject, selectProject } from "../../redux/projectSliice";
import { useNavigate } from "react-router-dom";
import { truncate } from "../../uitils";

type ProjectCardProps = {
  project: Project;
  deleteProject: (arg: string) => void;
};

const ProjectCard = ({ project, deleteProject }: ProjectCardProps) => {
  const { id, name } = useAppSelector(selectProject);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlProjectClick = () => {
    dispatch(addProject(project));
    localStorage.setItem("projectId", project._id);
    navigate("/create");
  };

  return (
    <Box
      p={3}
      pt={1}
      borderRadius={"16px"}
      sx={{
        height: "100%",
        background: "white",
        border:
          id === project._id
            ? `2px solid ${theme.palette.primary.main}`
            : `1px solid ${theme.palette.grey[300]}`,
        "&:hover": {
          boxShadow: theme.shadows[4],
        },
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Typography variant="subtitle1" color="grey.700">
          {id === project._id ? name : project.name}
        </Typography>
        <Stack direction={"row"} alignItems="center">
          <Box>
            <Typography
              sx={{ display: "block" }}
              variant="caption"
              color="grey.700"
            >
              {moment(project.updatedAt).fromNow()}
            </Typography>
            {id === project._id ? (
              <Typography variant="caption" sx={{ color: "primary.main" }}>
                active
              </Typography>
            ) : null}
          </Box>
          <IconButton onClick={handleClick} sx={{ marginRight: -1.8 }}>
            <MoreVert />
          </IconButton>
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

              width: 140,
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
          {/* <MenuItem sx={{ borderRadius: "8px", my: 0.5, mt: 1 }}>
            <ListItemIcon>
              <ModeEditOutlineOutlined
                sx={{ color: "grey.700", fontSize: "20px" }}
              />
            </ListItemIcon>
            <Typography variant="subtitle2" color="grey.700">
              Edit
            </Typography>
          </MenuItem> */}
          <MenuItem
            sx={{ borderRadius: "8px", my: 0.5 }}
            onClick={() => deleteProject(project._id)}
          >
            <ListItemIcon>
              <DeleteOutlineOutlined fontSize="small" color="error" />
            </ListItemIcon>
            <Typography variant="subtitle2" color="grey.700">
              Delete
            </Typography>
          </MenuItem>
        </Menu>
      </Stack>
      <Divider />
      <Box
        sx={{ cursor: "pointer", height: "100%" }}
        onClick={handlProjectClick}
      >
        <Box my={2}>
          <Typography variant="subtitle2" color="gray.700">
            Product/Brand Name
          </Typography>
          <Typography variant="body2" color="grey.600">
            {project.productName ? project.productName : "....."}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="grey.700">
            Description
          </Typography>
          <Typography variant="body2" color="grey.600">
            {project.description
              ? truncate(project.description, 213)
              : "--------"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
