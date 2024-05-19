import React from "react";
import { GoArrowRight } from "react-icons/go";
import "./cart.scss";

interface CartProps {
  cart: {
    poster_path?: string;
    title: string;
  };
}

const defaultImagePath: string =
  "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmllfGVufDB8fDB8fHww";

const Cart: React.FC<CartProps> = ({ cart }) => {
  return (
    <div className="cart">
      <div className="img">
        <img
          src={
            cart.poster_path
              ? `https://image.tmdb.org/t/p/w500${cart.poster_path}`
              : defaultImagePath
          }
          alt=""
        />
      </div>
      <div className="content">
        <h6 className="contentText">{cart.title}</h6>
        <GoArrowRight className="contentIcon" />
      </div>
    </div>
  );
};

export default Cart;
