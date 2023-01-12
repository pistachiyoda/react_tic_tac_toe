import { Board } from "./boardModel";
import { position } from "./interfaces";

export class Player {
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

  setMark = (position: position, board: Board) => {
    board.getBlock(position).changeStatus(this.#mark);
  };
}
