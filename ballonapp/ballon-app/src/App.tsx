import { useState } from "react";
import BalloonItem from "./Balloon";
import "./App.css";
import type { Balloon, BalloonColor } from "./types";

const colors: BalloonColor[] = ["red", "green", "yellow"];

const getNextColor = (color: BalloonColor): BalloonColor => {
  const index = colors.indexOf(color);
  return colors[(index + 1) % colors.length];
};

const randomPosition = () => ({
  x: Math.random() * 600,
  y: Math.random() * 400,
});

function App() {
  const initialBalloons: Balloon[] = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    color: colors[Math.floor(Math.random() * colors.length)],
    ...randomPosition(),
  }));

  const [balloons, setBalloons] = useState<Balloon[]>(initialBalloons);

  const handleClick = (id: number) => {
    setBalloons((prev) =>
      prev.map((b) => {
        if (b.id !== id) return b;

        return {
          ...b,
          color: getNextColor(b.color),
          ...randomPosition(),
        };
      }),
    );
  };

  return (
    <div className="container">
      <h2>Balloon Game 🎈</h2>

      {balloons.map((b) => (
        <BalloonItem key={b.id} balloon={b} onClick={handleClick} />
      ))}
    </div>
  );
}

export default App;
