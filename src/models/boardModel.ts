import { BlockModel } from "./blockModel";
import { position } from "./interfaces";

export class BoardModel {
  #blocks: BlockModel[];

  constructor(blocks: BlockModel[] | null = null) {
    if (!blocks) {
      this.#blocks = [];
      let k = 0;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          this.blocks[k] = new BlockModel({ x: i, y: j });
          k++;
        }
      }
    } else {
      this.#blocks = [];
      let k = 0;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          this.blocks[k] = new BlockModel({ x: i, y: j }, blocks[k].status);
          k++;
        }
      }
    }
  }

  get blocks() {
    return this.#blocks;
  }

  getBlock(position: position): BlockModel {
    const block = this.blocks.find(
      (block) =>
        block.position.x === position.x && block.position.y === position.y
    );
    if (!block) throw new Error("該当ブロックがありません");
    return block;
  }
}
