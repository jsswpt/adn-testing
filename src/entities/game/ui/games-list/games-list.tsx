import { useList, useStore } from "effector-react";
import { gameModel } from "entities/game";
import React from "react";
import { Spaceinweider } from "shared/assets/icons/util-icons/spaceinweider";
import { GameCard } from "shared/ui/game-card/game-card";
import { Loader } from "shared/ui/loader/loader";

import st from "./styles.module.scss";

const GamesList = React.memo(() => {
  const isLoading = useStore(gameModel.$isLoading);
  const isFiltred = useStore(gameModel.$isFiltred);
  const isFilled = useStore(gameModel.$isFilled);

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

  const newGames = useList(gameModel.$newGames, (game) => (
    <li key={game.id}>
      <GameCard {...game} />
    </li>
  ));

  if (isLoading) {
    return <Loader />;
  } else if (isFilled) {
    return <ul className={st.list}>{isFiltred ? filtredGames : games}</ul>;
  } else {
    return (
      <>
        <div className={st.empty_wrap}>
          <Spaceinweider />
          <p className={st.title}>Нет результатов</p>
          <p className={st.subtitle}>
            К сожалению, по вашему запросу нет результатов.
          </p>
        </div>
        <div className={st.new_games_wrap}>
          <div className={st.new_games_wrap_top}>
            <h2 className={st.new_games_title}>Новинки в Turbinary</h2>
          </div>
          <ul className={st.list}>{newGames}</ul>
        </div>
      </>
    );
  }
});

export default GamesList;
