import { useStore } from "effector-react";
import { gameModel } from "entities/game";
import React from "react";
import { GameCard } from "shared/ui/game-card/game-card";
import { Loader } from "shared/ui/loader/loader";

import st from "./styles.module.scss";

export const GamesList = React.memo(() => {
  const games = useStore(gameModel.$games);
  const isLoading = useStore(gameModel.$isLoading);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <ul className={st.list}>
        {games.map((item) => (
          <li>
            <GameCard {...item} key={item.id} />
          </li>
        ))}
      </ul>
    );
  }
});
