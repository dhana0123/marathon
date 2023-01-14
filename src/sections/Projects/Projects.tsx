import React from "react";
import { Box, Grid, Container } from "@mui/material";
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
import { updateSnack } from "../../redux/SnackMessage";
import CreateProjectList from "./CreateProjectList";

const Projects = () => {
  const [changeProjectView, setChangeProjectView] = React.useState(true);
  const [projectList, setProjectList] = React.useState<Project[]>([]);
  const { id, name } = useAppSelector(selectProject);
  const matches = useMediaQuery("(max-width:600px)");
  const dispatch = useAppDispatch();

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
        dispatch(
          updateSnack({
            isModalOpen: true,
            message: res.data.message,
            messageType: "success",
          })
        );
        getProjectList();
        if (id === _id) {
          localStorage.removeItem("projectId");
          dispatch(clearProject());
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message) {
          dispatch(
            updateSnack({
              isModalOpen: true,
              message: err.response.data.message,
              messageType: "error",
            })
          );
        } else if (err.response.data.msg) {
          dispatch(
            updateSnack({
              isModalOpen: true,
              message: err.response.data.msg,
              messageType: "error",
            })
          );
        } else {
          dispatch(
            updateSnack({
              isModalOpen: true,
              message: err.message,
              messageType: "error",
            })
          );
        }
      });
  };

  return (
    <Container sx={{ mt: 2 }}>
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
          <CreateProjectList />
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
      <Box py={2}>
        <Box
          sx={{ border: `1px solid ${theme.palette.grey[200]}` }}
          boxShadow={(theme) => theme.shadows[4]}
          borderRadius={"8px"}
          px={{ xs: 0, sm: 2 }}
        >
          <CreateProjectList />
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
