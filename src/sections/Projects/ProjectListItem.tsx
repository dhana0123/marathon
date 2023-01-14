import React from "react";
import {
  IconButton,
  Stack,
  Typography,
  useTheme,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import {
  DescriptionOutlined,
  MoreVert,
  ModeEditOutlineOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";
import moment from "moment";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Project } from "../../definations/project";
import { useAppSelector } from "../../redux/store";
import { addProject, selectProject } from "../../redux/projectSliice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type Props = {
  project: Project;
  deleteProject: (arg: string) => void;
};

const ProjectListItem = ({ project, deleteProject }: Props) => {
  const { id, name } = useAppSelector(selectProject);
  const matches = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
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
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent="space-between"
      p={1}
      sx={{
        cursor: "pointer",
        background: "white",
        borderRadius: "8px",
        borderBottom: `2px dashed ${theme.palette.grey[200]}`,
        "&:hover": {
          background: theme.palette.grey[100],
        },
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        onClick={handlProjectClick}
      >
        <IconButton sx={{ mr: 1 }}>
          <DescriptionOutlined sx={{ color: "grey.700", fontSize: "22px" }} />
        </IconButton>
        <Typography variant={"body2"} color={"grey.700"}>
          {id === project._id ? name : project.name}
        </Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography
          variant={matches ? "caption" : "body2"}
          color="grey.600"
          sx={{ mr: 1 }}
        >
          {moment(project.updatedAt).fromNow()}
        </Typography>
        <IconButton onClick={handleClick}>
          <MoreVert />
        </IconButton>
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
    </Stack>
  );
};

export default ProjectListItem;
