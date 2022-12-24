import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import PlanCard from "./PlanCard";
import config from "../../config";

const freePlanBenfits = [
  "2,000 words per month",
  "Unlimited projects",
  "90+ copywriting tools",
];

const monthlyPlan = [
  "Unlimited words",
  "Unlimited projects",
  "90+ copywriting tools",
  "Priority support",
];

const yearlyPlan = [
  "Unlimited words",
  "Unlimited projects",
  "90+ copywriting tools",
  "Priority support",
  "Access to our newest features",
];

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
      }}
    >
      <Typography variant="h2" textAlign="center">
        Fast, easy and cost-effective
      </Typography>
      <Typography textAlign={"center"} my={1.5} variant="body1">
        Flexible plans for your size and needs
      </Typography>
      <Stack mt={3} direction={{ xs: "column", sm: "row" }} spacing={3}>
        <PlanCard
          benfits={freePlanBenfits}
          title="basic"
          price={"Free"}
          time={""}
          description={"2,000 words per month"}
          subtitle={"No Credit card required"}
          buttonTitle={"Sign up for free"}
          onButtonOnClick={() => {
            console.log("button cliced");
          }}
        />
        <PlanCard
          benfits={monthlyPlan}
          title={"monthly"}
          price={"45"}
          time="/monthly"
          description={"$45 Billed Monthly"}
          subtitle={"No Credit card required"}
          highlet={true}
          buttonTitle={"Choose Monthly"}
          onButtonOnClick={handleMonthlyPlan}
        />
        <PlanCard
          benfits={yearlyPlan}
          title={"yearly"}
          time="/monthly"
          price={"39"}
          description={"$420 Billed Yearly"}
          subtitle={"No Credit card required"}
          buttonTitle={"Choose Yearly"}
          onButtonOnClick={handleYearlyPlan}
        />
      </Stack>
    </Box>
  );
};

export default Subscription;
