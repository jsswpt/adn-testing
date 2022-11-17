import { combine, createEvent, createStore, sample } from "effector";
import { gameModel } from "entities/game";
import { throttle } from "patronum";

export const $query = createStore("");
const $throttledQuery = createStore("");

export const queryEntered = createEvent<string>();

const throttledQueryEntered = throttle({
  source: queryEntered,
  timeout: 640,
});

$query.on(queryEntered, (_, query) => {
  return query;
});

$throttledQuery.on(throttledQueryEntered, (_, query) => {
  return query;
});

const $searchedGames = combine([gameModel.$games, $query], ([games, query]) => {
  if (query.trim().length) {
    return games.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  return games;
});

sample({
  clock: $throttledQuery,
  source: $searchedGames,

  target: gameModel.$games,
});

export const model = {
  $query,
  queryEntered,
};
