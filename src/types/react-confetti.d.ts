declare module "react-confetti" {
  import { Component } from "react";

  interface ConfettiProps {
    width?: number;
    height?: number;
    numberOfPieces?: number;
    recycle?: boolean;
    colors?: string[];
    gravity?: number;
    wind?: number;
    friction?: number;
    initialVelocityX?: number;
    initialVelocityY?: number;
    tweenFunction?: (
      currentTime: number,
      currentValue: number,
      targetValue: number,
      duration: number
    ) => number;
    onConfettiComplete?: (confetti: any) => void;
    drawShape?: (context: CanvasRenderingContext2D) => void;
    run?: boolean;
  }

  export default class Confetti extends Component<ConfettiProps, any> {}
}
