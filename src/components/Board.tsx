import React from "react";
import { BlockModel } from "../models/blockModel";
import { BoardModel } from "../models/boardModel";
import { Block } from "./Block";
import { position } from "../models/interfaces";

export const Board: React.FC<{
  onClick: (position: position, board: BoardModel) => void;
  board: BoardModel;
}> = ({ onClick, board }) => {
  const blocks = board.blocks.map((block: BlockModel, i: number) => {
    return (
      <Block
        key={i}
        onClick={onClick}
        board={board}
        x={block.position.x}
        y={block.position.y}
      />
    );
  });

  return <div id="board">{blocks}</div>;
};
