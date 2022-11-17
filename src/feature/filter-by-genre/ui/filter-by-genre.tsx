import { useList } from "effector-react";
import React from "react";
import { Checkbox } from "shared/ui/checkbox/checkbox";
import { model } from "../model";

export const FilterByGenre = React.memo(() => {
  const list = useList(model.$genres, (genre) => (
    <li key={genre.id}>
      <Checkbox
        checked={genre.isActive}
        onChange={() => {
          if (genre.isActive) {
            model.onGenreRemoved(genre.id);
          } else {
            model.onGenreSelected(genre.id);
          }
        }}
      />
      <p>{genre.name}</p>
    </li>
  ));
  return <div>{list}</div>;
});
