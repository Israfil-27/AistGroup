export const baseUrl = `https://api.themoviedb.org/3`;
import axios from "axios";

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
  },
});
