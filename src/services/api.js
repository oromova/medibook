import axios from "axios";

export const api = axios.create({
  baseURL: "https://686ca37214219674dcc896c0.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;