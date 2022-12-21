import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import PlanCard from "./PlanCard";
import config from "../../config";

const Subscription = () => {
  const theme = useTheme();

  const handleMonthlyPlan = () => {
    const priceId = "price_1MH3vwSEfslAQp0XHl9ize7y";
    const user = "63a1bea08c5c5192fb18d2ce";
    axios
      .post(`${config.serverUrl}/subscription/create-checkout-session`, {
        priceId,
        user,
      })
      .then((res) => {
        window.location.href = res.data.url;
      })
      .catch((err) => console.log(err));
  };

  const handleYearlyPlan = () => {
    const priceId = "price_1MH3vwSEfslAQp0XHl9ize7y";
    const user = "63a1bea08c5c5192fb18d2ce";
    axios
      .post(`${config.serverUrl}/subscription/create-checkout-session`, {
        priceId,
        user,
      })
      .then((res) => {
        window.location.href = res.data.url;
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      p={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "1rem",
      }}
    >
      <Typography variant="h3" color="white" textAlign="center">
        Fast, easy and cost-effective
      </Typography>
      <Typography
        textAlign={"center"}
        my={1.5}
        variant="body1"
        sx={{ color: "grey.100" }}
      >
        Flexible plans for your size and needs
      </Typography>
      <Stack mt={3} direction={{ xs: "column", sm: "row" }} spacing={3}>
        <PlanCard
          title="basic"
          price={"Free"}
          description={"2,000 words per month"}
          subtitle={"No Credit card required"}
          buttonTitle={"Sign up for free"}
          onButtonOnClick={() => {
            console.log("button cliced");
          }}
        />
        <PlanCard
          title={"monthly"}
          price={"45"}
          description={"Unlimited words per month"}
          subtitle={"No Credit card required"}
          highlet={true}
          buttonTitle={"Choose Monthly"}
          onButtonOnClick={handleMonthlyPlan}
        />
        <PlanCard
          title={"yearly"}
          price={"39"}
          description={"Unlimited words per month"}
          subtitle={"No Credit card required"}
          buttonTitle={"Choose Yearly"}
          onButtonOnClick={handleYearlyPlan}
        />
      </Stack>
    </Box>
  );
};

export default Subscription;
