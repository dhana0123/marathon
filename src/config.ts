import axios from "axios";
const serverUrl = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: serverUrl,
});

export default {
  serverUrl,
  axios: axiosInstance,
};
