import { createEffect, createStore, sample } from "effector";
import { getGames } from "shared/api/game/game";
import { Game } from "shared/api/game/game.type";

export const getGamesFx = createEffect(async () => {
  const games = await getGames();
  return games;
});

export const $games = createStore<Game[]>([]);
export const $isLoading = getGamesFx.pending;

sample({
  clock: getGamesFx.doneData,
  target: $games,
});
