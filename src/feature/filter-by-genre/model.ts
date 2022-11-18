import { createEvent, sample } from "effector";
import { gameModel } from "entities/game";
import { Filter } from "shared/api/filter/filter.type";
import { getRandomId } from "shared/lib/getRandomId";

type GenreType = {
  isActive: boolean;
  id: string;
  name: string;
  filterer: Filter;
};

// в проекте с бекэндом этот кусок кода, по сути, вообще не нужен,
// т.к. всё, что он делает - получает жанры
export const $genres = gameModel.$games.map((games) => {
  // так как игра может хранить в себе несколько жанров
  // в виде массива, прохожусь мапом и возвращаю только сам массив,
  // после чего превращаю матрицу в плоский массив
  const flattenGenres = games.map((genre) => genre.genre).flat();

  //   сортирую и ищу совпадения
  const sortedAndFilteredGenres = flattenGenres.sort().filter((genre, idx) => {
    return flattenGenres[idx] !== flattenGenres[idx + 1];
  });

  const mappedGenres: GenreType[] = sortedAndFilteredGenres.map(
    (genre, idx) => {
      const id = getRandomId();
      return {
        isActive: false,
        id: id,
        name: genre,
        filterer: {
          id: id,
          func: (game) => {
            return game.genre.includes(genre);
          },
        },
      };
    }
  );

  return mappedGenres;
});

export const onGenreSelected = createEvent<GenreType>();
export const onGenreRemoved = createEvent<string>();

sample({
  source: $genres,
  clock: onGenreSelected,
  fn: (genres, genre) => {
    const newGenres = genres.map((item) =>
      item.id === genre.id ? { ...genre, isActive: true } : item
    );
    return newGenres;
  },
  target: $genres,
});

sample({
  source: $genres,
  clock: onGenreRemoved,
  fn: (genres, id) => {
    const newGenres = genres.map((genre) =>
      genre.id === id ? { ...genre, isActive: false } : genre
    );

    return newGenres;
  },
  target: $genres,
});

sample({
  source: gameModel.$filters,
  clock: onGenreRemoved,
  fn: (filters, id) => {
    const filtredFilters = filters.filter((item) => item.id !== id);
    return filtredFilters;
  },
  target: gameModel.$filters,
});

sample({
  source: gameModel.$filters,
  clock: onGenreSelected,
  fn: (filters, genre) => {
    return [...filters, genre.filterer];
  },
  target: gameModel.$filters,
});

export const model = { $genres, onGenreSelected, onGenreRemoved };
