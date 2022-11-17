import { useList, useStore } from "effector-react";
import { gameModel } from "entities/game";
import React from "react";
import { GameCard } from "shared/ui/game-card/game-card";
import { Loader } from "shared/ui/loader/loader";

import st from "./styles.module.scss";

const GamesList = React.memo(() => {
  const isLoading = useStore(gameModel.$isLoading);
  const isFiltred = useStore(gameModel.$isFiltred);

  const filtredGames = useList(gameModel.$filteredGames, (game) => (
    <li key={game.id}>
      <GameCard {...game} />
    </li>
  ));

  const games = useList(gameModel.$games, (game) => (
    <li key={game.id}>
      <GameCard {...game} />
    </li>
  ));

  if (isLoading) {
    return <Loader />;
  } else {
    return <ul className={st.list}>{isFiltred ? filtredGames : games}</ul>;
  }
});

export default GamesList;
