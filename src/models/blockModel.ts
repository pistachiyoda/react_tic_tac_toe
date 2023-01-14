import { position } from "./interfaces";

export class BlockModel {
  #status: "○" | "x" | "";
  #position: position;
  constructor(position: position, status: "○" | "x" | "" | null = null) {
    if (!status) {
      this.#status = "";
    } else {
      this.#status = status;
    }
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
