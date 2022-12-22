import React from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/system";
import Fuse from "fuse.js";
import { searchTools } from "../../constants";
import Typography from "@mui/material/Typography";
import { Menu } from "../../definations/Nav";

type Props = {
  searchTerm: string;
};

type FuzResult = Fuse.FuseResult<{
  id: number;
  title: string;
  category: string;
}>[];

const ResultPanel = ({ searchTerm }: Props) => {
  const fuse = new Fuse(searchTools, {
    keys: [
      {
        name: "title",
        weight: 0.9,
      },
      {
        name: "category",
        weight: 0.2,
      },
    ],
    minMatchCharLength: 3,
    threshold: 0.5,
  });
  const [searchResults, setSearchResults] = React.useState<FuzResult>([]);
  const theme = useTheme();

  React.useEffect(() => {
    const interval = setTimeout(() => {
      const fuzResult = fuse.search(searchTerm);
      setSearchResults(fuzResult);
      console.log(searchResults);
    }, 100);

    return () => clearTimeout(interval);
  }, [searchTerm]);

  return (
    <Box>
      {searchResults.length === 0 ? (
        <Box
          height="30vh"
          display={"flex"}
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h6">Not Found</Typography>
          <Typography variant="caption">
            No Results found for <b>"{searchTerm}"</b>.
          </Typography>
          <Typography variant="caption">
            Try checking for typos or using complete words
          </Typography>
        </Box>
      ) : (
        <Box>
          {(searchResults || []).map((item) => (
            <Box
              sx={{
                px: 3,
                cursor: "pointer",
                py: 0.6,
                border: "1px solid white",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: theme.palette.success.lighter,
                  border: `1px dashed ${theme.palette.primary.main}`,
                },
              }}
            >
              <Typography variant="subtitle1">{item.item.title}</Typography>
              <Typography variant="caption" color="grey.500">
                {item.item.category}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ResultPanel;
