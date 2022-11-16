import { combine, createEvent, createStore, sample } from "effector";
import { gameModel } from "entities/game";
import { throttle } from "patronum";

export const $query = createStore("");
const $throttledQuery = createStore("");
export const $isFiltred = createStore(false);

export const queryEntered = createEvent<string>();

const throttledQueryEntered = throttle({
  source: queryEntered,
  timeout: 640,
});

$query.on(queryEntered, (state, payload) => {
  return payload;
});

$throttledQuery.on(throttledQueryEntered, (_, query) => {
  return query;
});

$isFiltred.on(queryEntered, (state, payload) => {
  return !!payload.trim();
});

const $searchedGames = combine(
  [gameModel.$games, $throttledQuery],
  ([games, query]) => {
    return games.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }
);

sample({
  clock: [$searchedGames, $isFiltred],
  target: [gameModel.$filteredGames, gameModel.$isFiltred],
});

export const model = {
  $query,
  queryEntered,
};
