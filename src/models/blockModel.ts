import { position } from "./interfaces";

export class Block {
  #status: "○" | "x" | "";
  #position: position;
  constructor(position: position) {
    this.#status = "";
    this.#position = position;
  }

  changeStatus(status: "○" | "x" | "") {
    this.#status = status;
  }

  get status() {
    return this.#status;
  }

  get position() {
    return this.#position;
  }
}
