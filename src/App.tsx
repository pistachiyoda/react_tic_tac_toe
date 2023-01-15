import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { Player } from "./components/Player";
import { BoardModel } from "./models/boardModel";
import { PlayerModel } from "./models/playerModel";
import { position } from "./models/interfaces";

function App() {
  const [players, setPlayers] = useState([
    new PlayerModel("player1", "○"),
    new PlayerModel("player2", "x"),
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);
  const [board, setBoard] = useState(new BoardModel());

  const onClick = (position: position, board: BoardModel) => {
    setBoard(currentPlayer.setMark(position, board));
    endProcess(board);
  };

  const togglePlayer = () => {
    setCurrentPlayer((cp) =>
      cp.mark === players[0].mark ? players[1] : players[0]
    );
  };

  const checkThreeInARow = (board: BoardModel): PlayerModel | null => {
    for (let playerIndex = 0; playerIndex < 2; playerIndex++) {
      for (let i = 0; i < 3; i++) {
        const sameXBlocks = board.blocks.filter(
          (block) => block.position.x === i
        );
        const sameYBlocks = board.blocks.filter(
          (block) => block.position.y === i
        );
        if (
          sameXBlocks.every(
            (block) => players[playerIndex].mark === block.status
          ) ||
          sameYBlocks.every(
            (block) => players[playerIndex].mark === block.status
          )
        )
          return players[playerIndex];
      }

      const diagonal1Blocks = [
        board.blocks[0],
        board.blocks[4],
        board.blocks[8],
      ];
      const diagonal2Blocks = [
        board.blocks[2],
        board.blocks[4],
        board.blocks[6],
      ];
      if (
        diagonal1Blocks.every(
          (block) => players[playerIndex].mark === block.status
        ) ||
        diagonal2Blocks.every(
          (block) => players[playerIndex].mark === block.status
        )
      )
        return players[playerIndex];
    }
    return null;
  };

  const init = () => {
    setPlayers(() => [
      new PlayerModel("player1", "○"),
      new PlayerModel("player2", "x"),
    ]);
    setCurrentPlayer(players[0]);
    setBoard(new BoardModel());
  };

  const endGame = (message: string) => {
    if (confirm(`${message}!もう一回プレイしましょう！！`)) {
      init();
    }
  };

  const endWithVictory = (winner: string) => {
    endGame(`${winner} が勝利しました`);
  };

  const endWithDraw = (): void => {
    endGame("全てのマスが埋まりました");
  };

  const endProcess = (board: BoardModel) => {
    if (checkThreeInARow(board)) {
      setTimeout(() => endWithVictory(`${checkThreeInARow(board)?.name}`));
    } else if (
      board.blocks.filter(
        (block) => block.status !== "x" && block.status !== "○"
      ).length === 0
    ) {
      setTimeout(() => endWithDraw());
    } else {
      togglePlayer();
    }
  };

  return (
    <div className="App">
      <Player currentPlayerName={currentPlayer.name}></Player>
      <Board onClick={onClick} board={board}></Board>
    </div>
  );
}

export default App;
