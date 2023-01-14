import React from "react";
import { position } from "../models/interfaces";
// 型修正
export const Block = (props: any) => {
  const { onClick, board, x, y } = props;
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
