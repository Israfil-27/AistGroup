import React from "react";
import { AiFillStar } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";
import "./cart.scss";

interface CartsProps {
  carts: string;
  imgLength: number;
  content: string;
  data: any[];
}

const Carts: React.FC<CartsProps> = ({ carts, imgLength, content, data }) => {
  console.log(data);

  const cartDataSlice = data.slice(0, imgLength);
  const cartSecond = carts === "cartSecond";
  const cartThird = carts === "cartThird";

  return (
    <div className="carts">
      {cartDataSlice.map((item: any, idx: number) => (
        <div
          key={idx}
          className={
            cartSecond
              ? "cartSecond"
              : cartThird
              ? "cartThird"
              : carts === "cartMust"
              ? "cartMust"
              : "cart"
          }
        >
          <div className="images">
            {carts !== "cartThird" && carts !== "cartMust" ? (
              data
                .slice(0, 4)
                .map((movie: any) => (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt=""
                    key={movie.id}
                  />
                ))
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt=""
                className={carts === "cartThird" ? "" : ""}
              />
            )}
          </div>

          <div className={content === "ourGenresContent" ? content : "none"}>
            <h6 className="contentText">{item.title}</h6>
            <GoArrowRight className="contentIcon" />
          </div>

          <div className={content === "popularTop" ? content : "none"}>
            <div className="pupularButtons">
              <button className="pupularButton">Top 10 In</button>
              <h6 className="contentText">{item.title}</h6>
            </div>
            <GoArrowRight className="contentIcon" />
          </div>
          <div className={content === "actionTime" ? "actionTime" : "none"}>
            <div className="times">
              <img src="./Subtract.png" alt="" />
              <span className="time">{item.release_date}</span>
            </div>
            <div className="views">
              <img src="./views.png" alt="" />
              <span>{item.vote_count}K</span>
            </div>
          </div>
          <div className={content === "actionDate" ? "actionDate" : "none"}>
            <h4 className="date">Released at 14 April 2023</h4>
          </div>

          <div className={content === "actionStar" ? "actionStar" : "none"}>
            <div className="times">
              <img src="./Subtract.png" alt="" />
              <span className="time">1h 57min</span>
            </div>
            <div className="views">
              <div className="starts">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <span>{item.vote_count}K</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carts;
