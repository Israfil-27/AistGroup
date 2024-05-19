import { useState } from "react";
import Carousel from "../Carusel/Carousel";
import MustWatchMovies from "../Janrs/MustWatchMovies";
import NewReleases from "../Janrs/NewReleases";
import OurGenres from "../Janrs/OurGenres";
import PopularMovies from "../Janrs/PopularMovies";
import TrandingMovies from "../Janrs/TrandingMovies";
import Flagment from "../flagmen/fragment";
import "./main.scss";
const Main = () => {
  const [activeNavItem, setActiveNavItem] = useState("Home");

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };

  return (
    <>
      <Carousel />
      <main className="main">
        <nav className="menuCart" id="#menuMobile">
          <button
            className={`buttonMenu ${activeNavItem === "Home" ? "active" : ""}`}
            onClick={() => handleNavItemClick("Home")}
          >
            Movies
          </button>
          <button
            className={`buttonMenu ${
              activeNavItem === "Movies" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("Movies")}
          >
            Shows
          </button>
        </nav>
        <div className="movieContainer">
          <button className="movieButton">Movies</button>
          <OurGenres />
          <PopularMovies />
          <TrandingMovies />
          <NewReleases />
          <MustWatchMovies />
        </div>
        <div className="showsContainer">
          <button className="showsButton">Movies</button>
          <OurGenres />
          <PopularMovies />
          <TrandingMovies />
          <NewReleases />
          <MustWatchMovies />
        </div>
        <Flagment />
      </main>
    </>
  );
};

export default Main;
