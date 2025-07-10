import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
  },
});

export const fetchHostelStats = () => API.get("/hostels-stats");
export const fetchUserStats = () => API.get("/users-stats");
export const fetchLogs = () => API.get("/error-logs");
