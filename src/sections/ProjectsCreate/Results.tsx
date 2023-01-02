import React from "react";
import { Box, Stack, Button } from "@mui/material";
import ResultCard from "./ResultCard";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/images/animation.json";

type Props = {
  loading: boolean;
  content: string[];
  setContent: React.Dispatch<React.SetStateAction<string[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  generateContentHandler: () => void;
};

const Results = ({
  loading,
  setLoading,
  content,
  setContent,
  generateContentHandler,
}: Props) => {
  return (
    <Box mt={5} mb={"10rem"}>
      <Stack spacing={3}>
        {(content || []).map((item) => (
          <ResultCard key={item} text={item} />
        ))}
      </Stack>
      {loading ? (
        <Player
          autoplay
          loop
          src={animation}
          style={{ height: "300px", width: "300px", marginTop: "-0.5em" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      ) : (
        content.length > 0 && (
          <Button
            size="large"
            variant="contained"
            fullWidth
            onClick={generateContentHandler}
            sx={{ backgroundColor: "grey.800", my: 2, py: 1 }}
          >
            Generate More
          </Button>
        )
      )}
    </Box>
  );
};

export default Results;
