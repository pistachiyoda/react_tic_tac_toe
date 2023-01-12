import { Block } from "./blockModel";

export class Board {
  #blocks: Block[];

  constructor() {
    this.#blocks = [];
    let k = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.blocks[k] = new Block({ x: i, y: j });
        k++;
      }
    }
  }

  get blocks() {
    return this.#blocks;
  }

  getBlock(position: position): Block {
    const block = this.blocks.find(
      (block) =>
        block.position.x === position.x && block.position.y === position.y
    );
    if (!block) throw new Error("該当ブロックがありません");
    return block;
  }
}
