import { useList } from "effector-react";
import React from "react";
import { Checkbox } from "shared/ui/checkbox/checkbox";
import { FilterItemCheckbox } from "shared/ui/filter-item-checkbox/filter-item-checkbox";
import { model } from "../model";

export const FilterByGenre = React.memo(() => {
  const list = useList(model.$genres, (genre) => (
    <li key={genre.id} style={{ listStyle: "none" }}>
      <FilterItemCheckbox
        title={genre.name}
        value={genre.isActive}
        onChange={() => {
          if (genre.isActive) {
            model.onGenreRemoved(genre.id);
          } else {
            model.onGenreSelected(genre);
          }
        }}
      />
    </li>
  ));
  return <ul>{list}</ul>;
});
