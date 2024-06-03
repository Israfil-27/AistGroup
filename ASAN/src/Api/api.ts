import axios from "axios";

const baseUrl = "https://portal.login.gov.az/grant-permission?client_id=fb541713acd54641b4e24b3724ca811e&redirect_uri=http:%2F%2Flocalhost:5901%2F&response_type=code&state=1719042593014&scope=openid";
const axiosInstance = axios.create({ baseURL: baseUrl });

export const asanLogin = async () => {
  return (await axiosInstance.get<any>("")).data
};
