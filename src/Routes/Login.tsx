import React from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Divider,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";
import LoadingButton from "@mui/lab/LoadingButton";
import config from "../config";
import { validateEmail } from "../uitils/validators";
import { dashboard, facebook, google } from "../assets/images";
import { useAppDispatch } from "../redux/store";
import { loggedIn } from "../redux/userSlice";

type State = "Email" | "Otp";

const Login = () => {
  const [state, setState] = React.useState<State>("Email");
  const [email, setEmail] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [otpError, setOtpError] = React.useState("");
  const [emailVerifactionId, setEmailVerificationId] = React.useState("");
  const [otpResendMessage, setOtpResendMessaage] = React.useState("");
  const [emailLoading, setEmailLoading] = React.useState(false);
  const [otpLoading, setOtpLoading] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const getEmailVerificationOtp = React.useCallback(() => {
    setEmailLoading(true);
    const isEmailValid = validateEmail(email);
    if (isEmailValid) {
      setEmailError("");
      config.axios
        .post(`${config.serverUrl}/auth/signup`, {
          email,
        })
        .then((res) => {
          setEmailLoading(false);
          setEmailVerificationId(res.data.data.verificationId);
          setState("Otp");
        })
        .catch((error) => {
          setEmailLoading(false);
          if (error.response.data.message) {
            setEmailError(error.response.data.message);
          }
          if (error.response.data.errors) {
            setEmailError(error.response.data.errors[0].msg);
          }
        });
    } else {
      setEmailLoading(false);
      setEmailError("Email is invalid");
    }
  }, [email]);

  const resendOtp = React.useCallback(() => {
    const isEmailValid = validateEmail(email);
    if (isEmailValid) {
      setEmailError("");
      config.axios
        .post(`${config.serverUrl}/auth/signup`, {
          email,
        })
        .then((res) => {
          setEmailVerificationId(res.data.data.verificationId);
          setOtpResendMessaage("Otp Sent Again");
          setTimeout(() => {
            setOtpResendMessaage("");
          }, 8000);
        })
        .catch((error) => {
          if (error.response.data) {
            setOtpResendMessaage("");
            setEmailError(error.response.data.errors[0].msg);
          }
        });
    } else {
      setEmailError("Email is invalid");
    }
  }, [email]);

  const verifyOtp = React.useCallback(() => {
    setOtpLoading(true);
    config.axios
      .post(`${config.serverUrl}/auth/verify`, {
        type: "email",
        id: emailVerifactionId,
        otp,
      })
      .then((res) => {
        localStorage.setItem("userId", res.data.data.userId);
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        localStorage.setItem("login", "true");
        dispatch(loggedIn());
        navigate("/");
        setOtpLoading(false);
        setOtpError("");
      })
      .catch((err) => {
        setOtpLoading(false);
        if (err.response.data.message) {
          setOtpError(err.response.data.message);
        }
        if (err.response.data.errors) {
          setOtpError(err.response.data.errors[0].msg);
        }
      });
  }, [otp]);

  return (
    <Stack direction={{ xs: "column", sm: "row" }}>
      <Box
        display={{ xs: "none", sm: "flex" }}
        width={{ xs: "100%", sm: "65%" }}
        height="100vh"
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor="grey.100"
      >
        <img src={dashboard} width="70%" />
      </Box>
      <Box
        display="flex"
        width={{ xs: "100%", sm: "35%" }}
        p={{ xs: 3, sm: 6 }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {state === "Email" && (
          <Box sx={{ maxWidth: "350px" }}>
            {/* <img src={logo} width="60px" style={{ marginBottom: "1rem" }} /> */}
            <Typography variant="h4" color="grey.800">
              Log in or create an account to Writy.ai
            </Typography>
            <Typography variant="body2" color="grey.500" mb={{ xs: 2, sm: 1 }}>
              Quickly get started by signing in using your existing accounts.
            </Typography>
            <TextField
              error={emailError !== ""}
              helperText={emailError}
              id="outlined-basic"
              label="Enter Your Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{ mt: "1rem", mb: 1 }}
            />
            <LoadingButton
              loading={emailLoading}
              size="large"
              fullWidth
              variant="contained"
              sx={{ my: 1, mb: 2 }}
              onClick={getEmailVerificationOtp}
            >
              Continue
            </LoadingButton>
            <Typography variant="caption" color="grey.500" textAlign={"center"}>
              We’ll email you a code for a password-free registration.
            </Typography>
            <Divider
              variant="fullWidth"
              sx={{ width: "100%", my: { xs: 3, sm: 2 } }}
            >
              <Typography variant="body2" color="grey.600" sx={{ mb: "-2px" }}>
                or
              </Typography>
            </Divider>
            <Stack mt={3} direction={"column"} spacing={2}>
              <Button
                size="large"
                sx={{ bgcolor: "grey.200", color: "grey.800" }}
              >
                <img width={28} src={google} style={{ marginRight: "5px" }} />
                Continue with Google
              </Button>
              <Button
                size="large"
                sx={{ bgcolor: "grey.200", color: "grey.800" }}
              >
                <img width={28} src={facebook} style={{ marginRight: "5px" }} />
                Continue with Facebook
              </Button>
            </Stack>
          </Box>
        )}
        {state === "Otp" && (
          <Box sx={{ maxWidth: "350px" }}>
            <Typography variant="h4" color="grey.800">
              Please enter the OTP.
            </Typography>
            <Typography variant="body2" color="grey.500" mb={{ xs: 2, sm: 1 }}>
              We have emailed a 5-digit OTP
            </Typography>
            <Typography sx={{ mb: 4 }} variant="subtitle2" color="grey.800">
              {email}
            </Typography>
            {emailError && (
              <Typography variant="caption" color="error.main">
                {emailError}
              </Typography>
            )}
            <MuiOtpInput
              length={5}
              TextFieldsProps={{
                placeholder: "-",
                error: otpError !== "",
                type: "tel",
              }}
              value={otp}
              onChange={(newOtp) => setOtp(newOtp)}
            />
            <Typography
              sx={{ display: "block", my: 2 }}
              variant="caption"
              textAlign={"center"}
              color="error.main"
            >
              {otpError}
            </Typography>
            <Typography
              sx={{ display: "block", my: 2 }}
              variant="caption"
              textAlign={"center"}
              color="warning.main"
            >
              {otpResendMessage}
            </Typography>
            <Button onClick={resendOtp}>Resend Otp</Button>
            <LoadingButton
              loading={otpLoading}
              size="large"
              fullWidth
              variant="contained"
              sx={{ my: 1, mt: 2, mb: 2 }}
              onClick={verifyOtp}
            >
              Verify Otp
            </LoadingButton>
            <Typography variant="caption" color="grey.500" textAlign={"center"}>
              We’ll email you a code for a password-free registration.
            </Typography>
            <Divider
              variant="fullWidth"
              sx={{ width: "100%", my: { xs: 3, sm: 2 } }}
            >
              <Typography variant="body2" color="grey.600" sx={{ mb: "-2px" }}>
                or
              </Typography>
            </Divider>
            <Stack mt={3} direction={"column"} spacing={2}>
              <Button
                size="large"
                sx={{ bgcolor: "grey.200", color: "grey.800" }}
              >
                <img width={28} src={google} style={{ marginRight: "5px" }} />
                Continue with Google
              </Button>
              <Button
                size="large"
                sx={{ bgcolor: "grey.200", color: "grey.800" }}
              >
                <img width={28} src={facebook} style={{ marginRight: "5px" }} />
                Continue with Facebook
              </Button>
            </Stack>
          </Box>
        )}
      </Box>
    </Stack>
  );
};

export default Login;
