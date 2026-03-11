import type { Balloon } from "./types";

interface Props {
  balloon: Balloon;
  onClick: (id: number) => void;
}

const BalloonItem = ({ balloon, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(balloon.id)}
      style={{
        position: "absolute",
        left: balloon.x,
        top: balloon.y,
        width: 60,
        height: 80,
        borderRadius: "50%",
        backgroundColor: balloon.color,
        cursor: "pointer",
        transition: "all 0.5s ease",
      }}
    />
  );
};

export default BalloonItem;
