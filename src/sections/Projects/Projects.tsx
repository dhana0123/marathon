import React from "react";
import { Box, Grid, Stack, Button, IconButton } from "@mui/material";
import ProjectTopBar from "./ProjectTopBar";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [changeProjectView, setChangeProjectView] = React.useState(true);

  return (
    <Box>
      <ProjectTopBar
        changeProjectView={changeProjectView}
        setChangeProjectView={setChangeProjectView}
      />
      {changeProjectView ? (
        <Grid py={2} container columnSpacing={2} rowSpacing={3}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Grid key={item} item xs={4}>
              <ProjectCard />
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>ool</p>
      )}
    </Box>
  );
};

export default Projects;
