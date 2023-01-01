import React from "react";
import {
  Box,
  Grid,
  Divider,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ProjectTopBar from "./ProjectTopBar";
import ProjectCard from "./ProjectCard";
import ProjectListItem from "./ProjectListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import CreateProjectCard from "./CreateProjectCard";

const Projects = () => {
  const [changeProjectView, setChangeProjectView] = React.useState(true);
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Container sx={{ mt: 2 }}>
      <ProjectTopBar
        changeProjectView={changeProjectView}
        setChangeProjectView={setChangeProjectView}
      />
      {matches ? (
        <MobileView />
      ) : (
        <DesktopView changeProjectView={changeProjectView} />
      )}
    </Container>
  );
};

type DesktopViewProps = {
  changeProjectView: boolean;
};

const DesktopView = ({ changeProjectView }: DesktopViewProps) => {
  const theme = useTheme();

  return changeProjectView ? (
    <Container>
      <Grid py={2} container columnSpacing={2} rowSpacing={3}>
        <Grid item xs={4}>
          <CreateProjectCard />
        </Grid>
        {[1, 2, 3, 4, 5, 6, 67, 77, 32].map((item) => (
          <Grid key={item} item xs={4}>
            <ProjectCard />
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
          <ProjectListItem />
          <ProjectListItem />
          <ProjectListItem />
          <ProjectListItem />
        </Box>
      </Box>
    </Container>
  );
};

const MobileView = () => {
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
          <ProjectListItem />
          <ProjectListItem />
          <ProjectListItem />
          <ProjectListItem />
        </Box>
      </Box>
    </Container>
  );
};
export default Projects;
