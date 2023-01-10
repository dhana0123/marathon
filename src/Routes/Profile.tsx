import React from "react";
import { Box, Typography, Container } from "@mui/material";
import config from "../config";
import { useDispatch } from "react-redux";
import { updateSnack } from "../redux/SnackMessage";
import { User } from "../definations/user";

const Profile = () => {
  const [userDetail, setUserDetail] = React.useState<User>();
  const dispatch = useDispatch();

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
    <Container>
      <Box py={2}>
        <Typography variant="h4">profile details</Typography>
        <Typography variant="body1">{userDetail?.email}</Typography>
      </Box>
      <Box>
        <Typography variant="h4">Payments</Typography>
        <Typography variant="h6">Plan</Typography>
        <Typography variant="body1">{userDetail?.subscription.plan}</Typography>
      </Box>
    </Container>
  );
};

export default Profile;
