import React from "react";
import { Box, Grid, Divider, Button, IconButton } from "@mui/material";
import ProjectTopBar from "./ProjectTopBar";
import ProjectCard from "./ProjectCard";
import ProjectListItem from "./ProjectListItem";
import useMediaQuery from "@mui/material/useMediaQuery";

const Projects = () => {
  const [changeProjectView, setChangeProjectView] = React.useState(true);
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      <ProjectTopBar
        changeProjectView={changeProjectView}
        setChangeProjectView={setChangeProjectView}
      />
      {matches ? (
        <MobileView />
      ) : (
        <DesktopView changeProjectView={changeProjectView} />
      )}
    </Box>
  );
};

type DesktopViewProps = {
  changeProjectView: boolean;
};

const DesktopView = ({ changeProjectView }: DesktopViewProps) =>
  changeProjectView ? (
    <Grid py={2} container columnSpacing={2} rowSpacing={3}>
      {[1, 2, 3, 4, 5].map((item) => (
        <Grid key={item} item xs={4}>
          <ProjectCard />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Box py={2}>
      <Box boxShadow={(theme) => theme.shadows[4]} borderRadius={"8px"}>
        <ProjectListItem />
        <ProjectListItem />
        <ProjectListItem />
        <ProjectListItem />
      </Box>
    </Box>
  );

const MobileView = () => (
  <Box py={2}>
    <Box boxShadow={(theme) => theme.shadows[4]} borderRadius={"8px"}>
      <ProjectListItem />
      <ProjectListItem />
      <ProjectListItem />
      <ProjectListItem />
    </Box>
  </Box>
);
export default Projects;
