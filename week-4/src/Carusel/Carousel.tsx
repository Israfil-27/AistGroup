import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AiOutlineLike, AiOutlinePlus, AiOutlineSound } from "react-icons/ai";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { api } from "../Api/api";
import "./Carousel.scss";

const Carousel = () => {
  const [slide, setSlide] = useState<number>(0);

  const { isPending, error, data } = useQuery({
    queryKey: ["main-carousel"],
    queryFn: async () => {
      const response = await api.get(
        "discover/tv?api_key=e81b8c747a3769afc226a3266478dd63&include_adult=false&include_null_first_air_dates=false"
      );
      return response?.data.results;
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const arrowData = data?.slice(0, 4) ?? [];

  const nextSlide = () => {
    setSlide((prev) => (prev === arrowData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? arrowData.length - 1 : prev - 1));
  };

  return (
    <div className="carouselContainer">
      <div className="carousel">
        {arrowData.map((item: any, idx: number) => (
          <div
            key={item.id}
            className={slide === idx ? "slide" : "slide slideHidden"}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              key={item.id}
              alt={`Slide ${idx}`}
            />
            <div className="movieContainer">
              <h3 className="movisName">{item.original_name}</h3>
              <p className="movisContent">{item.overview}</p>
              <div className="movisButtons">
                <button className="playButton">
                  <img src="./playButton.png" alt="Play" />
                  <span>Play Now</span>
                </button>
                <button className="caruselButton">
                  <AiOutlinePlus />
                </button>
                <button className="caruselButton">
                  <AiOutlineLike />
                </button>
                <button className="caruselButton">
                  <AiOutlineSound />
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="iconsContainer">
          <div className="arrowIconContainer" onClick={() => prevSlide()}>
            <GoArrowLeft className="arrow arrowLeft" />
          </div>
          <span className="indicators">
            {arrowData.map((item: any, idx: number) => (
              <button
                key={item.id}
                className={`indicator ${slide === idx ? "active" : ""}`}
                onClick={() => setSlide(idx)}
              ></button>
            ))}
          </span>
          <div className="arrowIconContainer" onClick={() => nextSlide()}>
            <GoArrowRight className="arrow arrowRight" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
