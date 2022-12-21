import React from "react";
import { Box, Grid, Divider, Button, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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

const DesktopView = ({ changeProjectView }: DesktopViewProps) => {
  const theme = useTheme();

  return changeProjectView ? (
    <Grid px={4} py={2} container columnSpacing={2} rowSpacing={3}>
      {[1, 2, 3, 4, 5].map((item) => (
        <Grid key={item} item xs={4}>
          <ProjectCard />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Box px={4} py={2}>
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
  );
};

const MobileView = () => {
  const theme = useTheme();
  return (
    <Box px={2} py={2}>
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
  );
};
export default Projects;
