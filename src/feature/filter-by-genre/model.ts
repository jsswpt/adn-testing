import { createEvent, sample } from "effector";
import { gameModel } from "entities/game";
import { Filter } from "shared/api/filter/filter.type";

type GenreType = {
  isActive: boolean;
  id: number;
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
    (genre, idx) => ({
      isActive: false,
      id: idx,
      name: genre,
      filterer: {
        id: idx,
        func: (game) => {
          return game.genre.includes(genre);
        },
      },
    })
  );

  return mappedGenres;
});

export const onGenreSelected = createEvent<number>();
export const onGenreRemoved = createEvent<number>();

sample({
  source: $genres,
  clock: onGenreSelected,
  fn: (genres, id) => {
    const newGenres = genres.map((genre) =>
      genre.id === id ? { ...genre, isActive: true } : genre
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
  source: { genres: $genres, filters: gameModel.$filters },
  clock: onGenreSelected,
  fn: ({ genres, filters }, id) => {
    const { filterer } = genres.find((item) => item.id === id)!;
    return [...filters, filterer];
  },
  target: gameModel.$filters,
});

export const model = { $genres, onGenreSelected, onGenreRemoved };
