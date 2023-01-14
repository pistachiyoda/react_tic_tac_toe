import { BoardModel } from "./boardModel";
import { position } from "./interfaces";

export class PlayerModel {
  #name: string;
  #mark: "○" | "x";

  constructor(name: string, mark: "○" | "x") {
    this.#name = name;
    this.#mark = mark;
  }

  get name() {
    return this.#name;
  }

  get mark() {
    return this.#mark;
  }
  // 新しいボードを返す
  setMark = (position: position, board: BoardModel): BoardModel => {
    board.getBlock(position).changeStatus(this.#mark);
    return new BoardModel(board.blocks);
  };
}
