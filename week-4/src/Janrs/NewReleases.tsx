import { useQuery } from "@tanstack/react-query";
import { api } from "../Api/api";
import ArrowButton from "../ArrowButton/ArrowButton";
import Carts from "../carts/Carts";

const NewReleases = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["our-upcoming"],
    queryFn: async () => {
      const response = await api.get(
        "trending/tv/day?api_key=e81b8c747a3769afc226a3266478dd63"
      );
      return response.data?.results as any;
    },
  });

  if (isLoading) return <div>Loading....</div>;

  return (
    <section className="ourGenres">
      <ArrowButton data={data} title="New Releases" />
      <Carts data={data} carts="cartThird" content="actionDate" imgLength={5} />
    </section>
  );
};

export default NewReleases;
