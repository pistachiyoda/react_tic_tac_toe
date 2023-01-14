import React, { FC } from "react";
import { Block } from "./Block";

// 型修正
export const Board = (props: any) => {
  const { onClick, board, setBoard } = props;
  console.log(board);
  const blocks = board.blocks.map((block: any, i: any) => {
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
