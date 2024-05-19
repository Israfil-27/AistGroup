import axios from "axios";

export const baseUrl =
  "https://api.themoviedb.org/3/movie/550?api_key=e81b8c747a3769afc226a3266478dd63";

const GetDataFromApi = () => {
  const fetchData = useQuery(["data"], () => {
    return axios.get(baseUrl).then((response) => response.data);
  });

  return <div></div>;
};

export default GetDataFromApi;
