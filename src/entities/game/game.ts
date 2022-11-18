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
export const $newGames = createStore<Game[]>([]);

export const $filters = createStore<Filter[]>([]);

export const $isLoading = getGamesFx.pending;
export const $isFiltred = createStore<boolean>(false);

export const $isFilled = createStore(false);

sample({
  clock: getGamesFx.doneData,
  target: $games,
});

// нужно доделать алгоритм фильтрации, т.к.
// при выборе нескольких жанров
// алгоритм пытается найти игру, в которой, к примеру,
// жанр - это экшн, инди и опен-ворлд, хотя, по задумке,
// он должен искать игру, включающую один из жанров

sample({
  clock: $filters,
  source: $games,
  fn: (games, filters) => {
    return games.filter((game) => {
      const isFits = filters.map((filter) => filter.func(game));
      if (isFits.includes(false)) {
        return false;
      }
      return true;
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

sample({
  clock: [$filteredGames, $games],
  source: {
    isFiltred: $isFiltred,
    filteredGames: $filteredGames,
    games: $games,
  },
  fn: ({ isFiltred, filteredGames, games }) => {
    if (isFiltred) {
      return !!filteredGames.length;
    } else {
      return !!games.length;
    }
  },
  target: $isFilled,
});

sample({
  clock: $games,
  fn: (games) => {
    return games.filter((item) => item.condition === "new");
  },
  target: $newGames,
});
