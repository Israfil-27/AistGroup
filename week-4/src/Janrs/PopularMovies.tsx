import { useQuery } from "@tanstack/react-query";
import { api } from "../Api/api";
import ArrowButton from "../ArrowButton/ArrowButton";
import Carts from "../carts/Carts";

const PopularMovies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: async () => {
      const response = await api.get(
        "/movie/popular?api_key=e81b8c747a3769afc226a3266478dd63"
      );
      return response.data?.results as any;
    },
  });

  if (isLoading) return <div>Loading....</div>;

  return (
    <section className="ourGenres">
    <ArrowButton data={data} title="Popular Top 10 In Genres" />
    <Carts
      data={data}
      carts="cartSecond"
      content="popularTop"
      imgLength={4}
    />
  </section>
  );
};

export default PopularMovies;
