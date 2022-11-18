import { combine, createEvent, createStore, sample } from "effector";
import { gameModel } from "entities/game";
import { throttle } from "patronum";
import { Filter, FilterFunc } from "shared/api/filter/filter.type";
import { Game } from "shared/api/game/game.type";
import { getRandomId } from "shared/lib/getRandomId";

const id = getRandomId();

export const $query = createStore("");
const $throttledQuery = createStore("");
const $isSearched = createStore(false);

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
  if (query.trim().length > 3) {
    return games.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  return games;
});

$isSearched.on(throttledQueryEntered, (_, query) => {
  if (query.trim().length > 3) {
    return true;
  }
  return false;
});

sample({
  clock: $isSearched,
  source: { filters: gameModel.$filters, query: $query },
  fn: ({ filters, query }, isSearched): Filter[] => {
    const findedFilter = filters.find((filter) => filter.id === id);

    const newFilter: Filter = {
      func: (game: Game) => {
        if (game.name.toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
        return false;
      },
      id: id,
    };

    if (isSearched && findedFilter) {
      return filters.map((filter) => {
        if (filter.id === id) {
          return newFilter;
        }
        return filter;
      });
    } else if (isSearched && !findedFilter) {
      return [...filters, newFilter];
    }
    return filters.filter((filter) => filter.id !== id);
  },
  target: gameModel.$filters,
});

export const model = {
  $query,
  queryEntered,
};
