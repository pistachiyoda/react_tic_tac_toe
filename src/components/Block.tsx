import React from "react";
import { BoardModel } from "../models/boardModel";
import { position } from "../models/interfaces";
export const Block: React.FC<{
  onClick: (position: position, board: BoardModel) => void;
  board: BoardModel;
  x: number;
  y: number;
}> = ({ onClick, board, x, y }) => {
  const position: position = { x, y };
  return (
    <div
      className="block"
      onClick={() => {
        onClick(position, board);
      }}
    >
      {board.getBlock(position).status}
    </div>
  );
};
