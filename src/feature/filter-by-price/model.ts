import { createEvent, createStore, sample } from "effector";
import { gameModel } from "entities/game";
import { throttle } from "patronum";
import { Filter, FilterFunc } from "shared/api/filter/filter.type";
import { Game } from "shared/api/game/game.type";
import { getRandomId } from "shared/lib/getRandomId";

const $minPrice = createStore<number>(1);
const $maxPrice = createStore<number>(10000);

const id = getRandomId();

const setMinPrice = createEvent<number>();
const setMaxPrice = createEvent<number>();

const throttledMinPrice = throttle({ source: setMinPrice, timeout: 600 });
const throttledMaxPrice = throttle({ source: setMaxPrice, timeout: 600 });

$minPrice.on(setMinPrice, (_, price) => {
  return price;
});
$maxPrice.on(setMaxPrice, (_, price) => {
  return price;
});

sample({
  source: { filters: gameModel.$filters, min: $minPrice, max: $maxPrice },
  clock: [throttledMinPrice, throttledMaxPrice],
  fn: ({ filters, max, min }) => {
    const findedFilter = filters.find((filter) => filter.id === id);
    const newFilter: Filter = {
      func: (game) => {
        if (min === 0 && max === 0) {
          return true;
        }
        return game.price > min && game.price < max;
      },
      id: id,
    };

    if (findedFilter) {
      const newFilters = filters.map((filter) => {
        if (filter.id === id) {
          return newFilter;
        }
        return filter;
      });
      return newFilters;
    } else {
      return [...filters, newFilter];
    }
  },
  target: gameModel.$filters,
});

export const model = { $minPrice, $maxPrice, setMinPrice, setMaxPrice };
