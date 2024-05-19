import { useQuery } from "@tanstack/react-query";
import { api } from "../Api/api";
import ArrowButton from "../ArrowButton/ArrowButton";
import Carts from "../carts/Carts";

const OurGenres = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["our-genres"],
    queryFn: async () => {
      const response = await api.get(
        "movie/now_playing?api_key=e81b8c747a3769afc226a3266478dd63"
      );
      return response.data?.results as any;
    },
  });

  if (isLoading) return <div>Loading....</div>;

  return (
    <section className="ourGenres">
      <ArrowButton data={data} title="Our Genres" />
      <Carts data={data} content="ourGenresContent" imgLength={5} />
    </section>
  );
};

export default OurGenres;
