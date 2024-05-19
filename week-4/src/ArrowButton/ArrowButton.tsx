import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./arrowButtonScss.scss";

interface ArrowButtonProps {
  data: any[];
  title: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ data = [], title }) => {
  const [slide, setSlide] = useState<number>(0);

  const arrowData = data.slice(0, 4);

  const nextSlide = () => {
    setSlide((prev) => (prev === arrowData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? arrowData.length - 1 : prev - 1));
  };

  return (
    <div className="wrapper">
      <h2>{title}</h2>
      <div className="arrowButtonsContainer">
        <div className="arrowIconContainer" onClick={prevSlide}>
          <GoArrowLeft className="arrow arrowLeft" />
        </div>
        <span className="indicators">
          {arrowData.map((_, idx) => (
            <button
              key={idx}
              className={`indicator ${slide === idx ? "active" : ""}`}
              onClick={() => setSlide(idx)}
            ></button>
          ))}
        </span>
        <div className="arrowIconContainer" onClick={nextSlide}>
          <GoArrowRight className="arrow arrowRight" />
        </div>
      </div>
    </div>
  );
};

export default ArrowButton;
