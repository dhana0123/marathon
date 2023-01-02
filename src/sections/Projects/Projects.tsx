import React from "react";
import {
  Box,
  Grid,
  Divider,
  Alert,
  Snackbar,
  Container,
  AlertColor,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ProjectTopBar from "./ProjectTopBar";
import ProjectCard from "./ProjectCard";
import ProjectListItem from "./ProjectListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import CreateProjectCard from "./CreateProjectCard";
import config from "../../config";
import { Project } from "../../definations/project";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { clearProject, selectProject } from "../../redux/projectSliice";

const Projects = () => {
  const [changeProjectView, setChangeProjectView] = React.useState(true);
  const [projectList, setProjectList] = React.useState<Project[]>([]);
  const { id, name } = useAppSelector(selectProject);
  const matches = useMediaQuery("(max-width:600px)");
  const dispatch = useAppDispatch();

  const [snackOpen, setSnackOpen] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState("");
  const [errorType, setErroType] = React.useState<AlertColor>("success");

  React.useEffect(() => {
    getProjectList();
  }, []);

  const getProjectList = () => {
    const userId = localStorage.getItem("userId");
    config.axios
      .post("/project", { user: userId })
      .then((res) => setProjectList(res.data.result.projects))
      .catch((err) => console.log(err));
  };

  const deleteProject = (_id: string) => {
    config.axios
      .delete(`/project/${_id}`)
      .then((res) => {
        setSnackOpen(true);
        setErroType("success");
        setSnackMessage(res.data.message);
        getProjectList();
        if (id === _id) {
          localStorage.removeItem("projectId");
          dispatch(clearProject());
        }
      })
      .catch((err) => {
        console.log(err);
        setSnackOpen(true);
        setErroType("error");
        if (err.response.data.message) {
          setSnackMessage(err.response.data.message);
        } else if (err.response.data.msg) {
          setSnackMessage(err.response.data.msg);
        } else {
          setSnackMessage(err.message);
        }
      });
  };

  return (
    <Container sx={{ mt: 2 }}>
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
      <ProjectTopBar
        changeProjectView={changeProjectView}
        setChangeProjectView={setChangeProjectView}
      />
      {matches ? (
        <MobileView projectList={projectList} deleteProject={deleteProject} />
      ) : (
        <DesktopView
          projectList={projectList}
          changeProjectView={changeProjectView}
          deleteProject={deleteProject}
        />
      )}
    </Container>
  );
};

type DesktopViewProps = {
  changeProjectView: boolean;
  projectList: Project[];
  deleteProject: (arg: string) => void;
};

const DesktopView = ({
  changeProjectView,
  projectList,
  deleteProject,
}: DesktopViewProps) => {
  const theme = useTheme();

  return changeProjectView ? (
    <Container>
      <Grid py={2} mb={4} container columnSpacing={2} rowSpacing={3}>
        <Grid item xs={4}>
          <CreateProjectCard />
        </Grid>
        {(projectList || []).map((project) => (
          <Grid key={project._id} item xs={4}>
            <ProjectCard project={project} deleteProject={deleteProject} />
          </Grid>
        ))}
      </Grid>
    </Container>
  ) : (
    <Container>
      <Box py={2}>
        <Box
          sx={{ border: `1px solid ${theme.palette.grey[200]}` }}
          boxShadow={(theme) => theme.shadows[4]}
          borderRadius={"8px"}
        >
          {(projectList || []).map((project) => {
            return (
              <ProjectListItem
                project={project}
                key={project._id}
                deleteProject={deleteProject}
              />
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

type MobileProps = {
  projectList: Project[];
  deleteProject: (arg: string) => void;
};

const MobileView = ({ projectList, deleteProject }: MobileProps) => {
  const theme = useTheme();
  return (
    <Container>
      <Box px={2} py={2}>
        <Box
          sx={{ border: `1px solid ${theme.palette.grey[200]}` }}
          boxShadow={(theme) => theme.shadows[4]}
          borderRadius={"8px"}
          px={2}
        >
          {(projectList || []).map((project) => {
            return (
              <ProjectListItem
                deleteProject={deleteProject}
                project={project}
                key={project._id}
              />
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};
export default Projects;
