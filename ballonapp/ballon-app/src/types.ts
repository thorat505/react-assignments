export type BalloonColor = "red" | "green" | "yellow";

export interface Balloon {
  id: number;
  color: BalloonColor;
  x: number;
  y: number;
}