import React from "react";

// 型修正
export const Player = (props: any) => {
  const { currentPlayerName } = props;
  return <h2>{currentPlayerName}</h2>;
};
