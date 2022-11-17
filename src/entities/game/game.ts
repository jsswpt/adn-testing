import { createEffect, createEvent, createStore, sample } from "effector";
import { Filter } from "shared/api/filter/filter.type";
import { getGames } from "shared/api/game/game";
import { Game } from "shared/api/game/game.type";

export const getGamesFx = createEffect(async () => {
  const games = await getGames();
  return games;
});

export const $games = createStore<Game[]>([]);
export const $filteredGames = createStore<Game[]>([]);

export const $filters = createStore<Filter[]>([]);

export const $isLoading = getGamesFx.pending;
export const $isFiltred = createStore<boolean>(false);

sample({
  clock: getGamesFx.doneData,
  target: $games,
});

sample({
  source: $games,
  clock: $filters,
  fn: (games, filters) => {
    return games.filter((game) => {
      const isFits = filters.map((filter) => filter.func(game));
      return isFits.includes(true);
    });
  },
  target: $filteredGames,
});

sample({
  clock: $filters,
  fn: (filters) => {
    if (filters.length) {
      return true;
    }
    return false;
  },
  target: $isFiltred,
});
