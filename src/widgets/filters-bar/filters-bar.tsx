import { FilterByGenre, FilterByPrice } from "feature";
import React from "react";
import { useScreen } from "shared/lib/useScreen";
import { FilterBarBlockLayout } from "shared/ui/filter-bar-block-layout/filter-bar-block-layout";
import { Modal } from "shared/ui/modal/modal";
import st from "./styles.module.scss";

export const FiltersBar = React.memo(() => {
  return (
    <div className={st.bar}>
      <FilterBarBlockLayout
        title="По популярности"
        withPopup
      ></FilterBarBlockLayout>
      <FilterBarBlockLayout title="Цена, ₽">
        <FilterByPrice />
      </FilterBarBlockLayout>
      <FilterBarBlockLayout title="Жанр" withPopup>
        <FilterByGenre />
      </FilterBarBlockLayout>
      <FilterBarBlockLayout title="Платформы" withPopup></FilterBarBlockLayout>
      <FilterBarBlockLayout title="Активация" withPopup></FilterBarBlockLayout>
      <FilterBarBlockLayout
        title="Разработчик"
        withPopup
      ></FilterBarBlockLayout>
      <FilterBarBlockLayout title="Издатель" withPopup></FilterBarBlockLayout>
    </div>
  );
});
