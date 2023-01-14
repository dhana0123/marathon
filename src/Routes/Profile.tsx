import React from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import config from "../config";
import { useDispatch } from "react-redux";
import { updateSnack } from "../redux/SnackMessage";
import { User } from "../definations/user";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userDetail, setUserDetail] = React.useState<User>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const userId = localStorage.getItem("userId");
    config.axios
      .get(`/auth/user/${userId}`)
      .then((res) => {
        setUserDetail(res.data.user);
      })
      .catch((err) => {
        dispatch(
          updateSnack({
            message: err.message,
            messageType: "error",
            isModalOpen: true,
          })
        );
      });
  }, []);
  return (
    <Container sx={{ mt: 4 }}>
      <Box
        p={2}
        sx={{
          borderRadius: "10px",
          background: "white",
          margin: "auto",
          maxWidth: "600px",
        }}
      >
        <Box p={2}>
          <Typography variant="h4">Profile details</Typography>
          <Typography pt={2} variant="subtitle1">
            Email
          </Typography>
          <Typography color="grey.700" variant="body1">
            {userDetail?.email}
          </Typography>
        </Box>
        <Divider />
        <Box p={2}>
          <Typography variant="h4">Subscription</Typography>
          <Typography pt={2} variant="subtitle1">
            Current Plan{" "}
          </Typography>
          <Typography color="grey.700" variant="body1" pb={2}>
            {userDetail?.subscription.plan}
          </Typography>
          <Divider />
          <Typography pt={2} variant="h4">
            Usage{" "}
          </Typography>
          <Stack pt={3} spacing={3} direction={"row"} alignItems="center">
            <Box sx={{ textAlign: "center" }}>
              <Typography color="primary" variant="h6">
                {userDetail?.subscription.usedWordsCount}
              </Typography>
              <Typography pt={1} variant="subtitle1">
                Words remaining
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography color="primary" variant="h6">
                {userDetail?.subscription.totalWordsCount}
              </Typography>
              <Typography pt={1} variant="subtitle1">
                Total words
              </Typography>
            </Box>
          </Stack>
          <Button
            variant="contained"
            sx={{ my: 2 }}
            onClick={() => {
              navigate("/plans");
            }}
          >
            Upgrade Plan
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
