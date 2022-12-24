import * as React from "react";
import { Accordion, Box } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const accordionDetails = [
    {
      title: "Is the copy generated original and plagiarism free?",
      content:
        "Marathon.ai generates absolutely original copy based on your input criteria.",
    },
    {
      title: "Can I use the generated copy for commercial use?",
      content:
        "Marathon.ai generates absolutely original copy based on your input criteria.",
    },
    {
      title: "Do you offer discounts for large volumes or non-profits?",
      content:
        "Marathon.ai generates absolutely original copy based on your input criteria.",
    },
    {
      title: "How do I report a bug or an error?",
      content:
        "Marathon.ai generates absolutely original copy based on your input criteria.",
    },
    {
      title: "Do you have an API?",
      content:
        "Marathon.ai generates absolutely original copy based on your input criteria.",
    },
    {
      title: "Where's all my content saved?",
      content:
        "Marathon.ai generates absolutely original copy based on your input criteria.",
    },
    {
      title: `What are "Content Packs"?`,
      content:
        "Marathon.ai generates absolutely original copy based on your input criteria.",
    },
  ];

  return (
    <Box p={2} width={{ sm: "70%" }} margin="auto">
      <Typography pt={3} pb={5} textAlign={"center"} variant="h2">
        Frequently Asked Questions
      </Typography>
      <Box boxShadow={(theme) => theme.shadows[8]}>
        {(accordionDetails || []).map((panel) => {
          return (
            <Accordion
              key={panel.title}
              sx={{ px: { xs: 1, sm: 4 }, py: 2 }}
              expanded={expanded === panel.title}
              onChange={handleChange(panel.title)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                  }}
                  color={"grey.800"}
                >
                  {panel.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{panel.content}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
}

// import React from "react";
// import { Typography, Box } from "@mui/material";

// const Faqs = () => {
//   return (
//     <Box p={4}>
//
//     </Box>
//   );
// };

// export default Faqs;
