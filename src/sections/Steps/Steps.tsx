import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Steps = () => {
  return (
    <Box py={8} pb={10}>
      <Typography textAlign={"center"} variant="h2" mb={5}>
        How it works
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
        <Step
          number="1"
          title="Select a type of copy Tool"
          subTitle="Choose from headlines, blog intros, product descriptions, and much more."
        />
        <Step
          number="2"
          title="Describe your product"
          subTitle="Just enter the name of your company and 1-2 sentences on what you do."
        />
        <Step
          number="3"
          title="Put CopyAI to work"
          subTitle="You’ll get 10 results at a time, and you can run the tool again for more ideas."
        />
      </Stack>
    </Box>
  );
};

type StepProps = {
  number: string;
  title: string;
  subTitle: string;
};

const Step = ({ number, title, subTitle }: StepProps) => (
  <Box>
    <Box
      display={"flex"}
      alignSelf={"center"}
      sx={{
        borderRadius: "5rem",
        height: "5rem",
        width: "5rem",
        backgroundColor: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        mb: 2,
      }}
    >
      <Typography variant="h3" color="white">
        {number}
      </Typography>
    </Box>
    <Typography textAlign={"center"} variant="h5">
      {title}
    </Typography>
    <Typography variant="body2" textAlign={"center"}>
      {subTitle}
    </Typography>
  </Box>
);

export default Steps;
