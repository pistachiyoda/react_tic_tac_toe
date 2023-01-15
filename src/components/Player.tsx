import React from "react";

export const Player: React.FC<{ currentPlayerName: string }> = ({
  currentPlayerName,
}) => {
  return <h2>{currentPlayerName}</h2>;
};
