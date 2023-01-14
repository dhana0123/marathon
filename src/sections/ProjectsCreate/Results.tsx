import React from "react";
import { Box, Stack, Button } from "@mui/material";
import ResultCard from "./ResultCard";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/images/animation.json";
import NoMoreTextCardComp from "./NoMoreTextCard";

type Props = {
  loading: boolean;
  content: { id: string; text: string }[];
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  generateContentHandler: () => void;
  NoMoreTextCard: boolean;
  NoMoreMessageText: string;
};

const Results = ({
  loading,
  setLoading,
  content,
  generateContentHandler,
  NoMoreTextCard,
  NoMoreMessageText,
}: Props) => {
  const containerRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    containerRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [loading]);

  return (
    <Box mt={5} mb={"10rem"}>
      <Stack spacing={3}>
        {(content || []).map((item) => (
          <ResultCard key={item.id} content={item} />
        ))}
        {!loading && NoMoreTextCard && (
          <NoMoreTextCardComp NoMoreMessageText={NoMoreMessageText} />
        )}
      </Stack>
      {loading ? (
        <>
          <Player
            autoplay
            loop
            src={animation}
            style={{ height: "270px", width: "300px", marginTop: "-0.5em" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>

          <Box sx={{ mt: 1 }} ref={containerRef}></Box>
        </>
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
