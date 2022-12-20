import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import PlanCard from "./PlanCard";
import config from "../../config";

const Subscription = () => {
  const theme = useTheme();

  const handleMonthlyPlan = () => {
    const priceId = "price_1MGTaQSEfslAQp0XVe5bOwYB";
    const user = "639f273951f1a08f98394542";
    axios
      .post(`${config.serverUrl}/subscription/create-checkout-session`, {
        priceId,
        user,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleYearlyPlan = () => {
    const priceId = "price_1MGTbVSEfslAQp0XWGOGUmzJ";
    const user = "639f273951f1a08f98394542";
    axios
      .post(`${config.serverUrl}/subscription/create-checkout-session`, {
        priceId,
        user,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Box
      width="100%"
      p={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" textAlign="center">
        Fast, easy and cost-effective
      </Typography>
      <Typography my={1.5} variant="body1" sx={{ color: "grey.600" }}>
        Flexible plans for your size and needs
      </Typography>
      <Stack mt={3} direction={"row"} spacing={3}>
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
