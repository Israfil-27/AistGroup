import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0dXJhbi5raGlkaWxvdkBnbWFpbC5jb20iLCJyb2xlcyI6W10sImlkIjo4LCJleHAiOjc3MTUyNjE0OTYsImlhdCI6MTcxNTI2MTQ5Nn0.BNKG31oU_3PkDQEaLkKQFdEnij_SlGjW2wzbJQI15a0";

const baseUrl = "http://65.108.86.31:8080/sg/private/api";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getDataFromApi = async (path) => {
  try {
    const response = await axiosInstance.get(`${baseUrl}/${path}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching car types:", error);
    throw error;
  }
};
