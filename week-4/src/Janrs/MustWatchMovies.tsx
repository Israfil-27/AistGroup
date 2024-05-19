import { useQuery } from "@tanstack/react-query";
import { api } from "../Api/api";
import ArrowButton from "../ArrowButton/ArrowButton";
import Carts from "../carts/Carts";

const MustWatchMovies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["our-upcoming"],
    queryFn: async () => {
      const response = await api.get(
        "movie/upcoming?api_key=e81b8c747a3769afc226a3266478dd63"
      );
      return response.data?.results as any;
    },
  });

  if (isLoading) return <div>Loading....</div>;
  return (
    <section className="ourGenres">
    <ArrowButton data={data} title="Must - Watch Movies" />
    <Carts
      data={data}
      carts="cartMust"
      content="actionStar"
      imgLength={4}
    />
  </section>
  );
};

export default MustWatchMovies;
