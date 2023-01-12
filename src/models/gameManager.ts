import { Player } from "./playerModel";
import { Board } from "./boardModel";
import { Block } from "./blockModel";

export class GameManager {
  players: Player[];
  currentPlayer: Player;
  board: Board;

  constructor() {
    this.players = [new Player("player1", "○"), new Player("player2", "x")];
    this.currentPlayer = this.players[0];
    this.board = new Board();
  }

  togglePlayer = () => {
    this.currentPlayer =
      this.currentPlayer === this.players[0]
        ? this.players[1]
        : this.players[0];
  };

  checkThreeInARow = (): Player | null => {
    for (let playerIndex = 0; playerIndex < 2; playerIndex++) {
      for (let i = 0; i < 3; i++) {
        const sameXBlocks = this.board.blocks.filter(
          (block) => block.position.x === i
        );
        const sameYBlocks = this.board.blocks.filter(
          (block) => block.position.y === i
        );
        if (
          sameXBlocks.every(
            (block) => this.players[playerIndex].mark === block.status
          ) ||
          sameYBlocks.every(
            (block) => this.players[playerIndex].mark === block.status
          )
        )
          return this.players[playerIndex];
      }

      const diagonal1Blocks = [
        this.board.blocks[0],
        this.board.blocks[4],
        this.board.blocks[8],
      ];
      const diagonal2Blocks = [
        this.board.blocks[2],
        this.board.blocks[4],
        this.board.blocks[6],
      ];
      if (
        diagonal1Blocks.every(
          (block) => this.players[playerIndex].mark === block.status
        ) ||
        diagonal2Blocks.every(
          (block) => this.players[playerIndex].mark === block.status
        )
      )
        return this.players[playerIndex];
    }
    return null;
  };

  init = () => {
    this.players = [new Player("player1", "○"), new Player("player2", "x")];
    this.currentPlayer = this.players[0];
    this.board = new Board();
  };

  endGame = (renderBoard: (blocks: Block[]) => void, message: string) => {
    if (confirm(`${message}!もう一回プレイしましょう！！`)) {
      this.init();
      renderBoard(this.board.blocks);
    }
  };

  endWithVictory = (renderBoard: (blocks: Block[]) => void, winner: string) => {
    this.endGame(renderBoard, `${winner} が勝利しました`);
  };

  endWithDraw = (renderBoard: (blocks: Block[]) => void) => {
    if (
      this.board.blocks.filter(
        (block) => block.status !== "x" && block.status !== "○"
      ).length === 0
    ) {
      this.endGame(renderBoard, "全てのマスが埋まりました");
    }
  };
}
