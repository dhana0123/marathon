import axios from "axios";
import jwt_decode from "jwt-decode";
const serverUrl = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: serverUrl,
});

type TokenData = {
  exp: number;
  iat: number;
  role: string;
  user: string;
};

axiosInstance.interceptors.request.use(
  function (config) {
    let accessToken = localStorage.getItem("accessToken");
    let refreshToken = localStorage.getItem("refreshToken");
    let newAccessToken = localStorage.getItem("accessToken");
    let newRefreshToken = localStorage.getItem("refreshToken");
    if (accessToken && refreshToken) {
      const accessDecoded: TokenData = jwt_decode(accessToken);
      const refreshDecoded: TokenData = jwt_decode(refreshToken);
      const currentTime = Date.now() / 1000;
      if (refreshDecoded.exp < currentTime) {
        window.location.href = "/login";
        localStorage.clear();
      } else if (accessDecoded.exp < currentTime) {
        axios
          .get(`${serverUrl}/auth/accesstoken`, {
            headers: { Authorization: `Bearer ${refreshToken}` },
          })
          .then((res) => {
            newAccessToken = res.data.data.accessToken;
            newRefreshToken = res.data.data.refreshToken;
            if (newAccessToken && newRefreshToken) {
              localStorage.setItem("accessToken", newAccessToken);
              localStorage.setItem("refreshToken", newRefreshToken);
            } else {
              return Promise.reject("no refresh token or accessToken");
            }
          })
          .catch((err) => {
            localStorage.clear();
            window.location.href = "/login";
          });
      }
    }
    config.headers = {
      Authorization: `Bearer ${newAccessToken}`,
      "Content-Type": "application/json",
    };
    return config;
  },
  function (error) {
    localStorage.clear();
    window.location.href = "/login";
    return Promise.reject(error);
  }
);

export default {
  serverUrl,
  axios: axiosInstance,
};
