import { useEffect, useState } from "react";
import "./MovingCar.css";
import carImage from "./assets/car.png";

function MovingCar() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev > window.innerWidth) {
          return -120; // restart from left
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="road">
      <img
        src={carImage}
        alt="car"
        className="car"
        style={{ left: position + "px" }}
      />
    </div>
  );
}

export default MovingCar;
