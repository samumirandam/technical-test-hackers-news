import axios from "axios";

const API_URL = "http://hn.algolia.com/api/v1";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
