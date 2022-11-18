import { FilterByGenre, FilterByPrice } from "feature";
import React from "react";
import { Close } from "shared/assets/icons/ui-icons/close";
import { useScreen } from "shared/lib/useScreen";
import { Button } from "shared/ui/button/button";
import { FilterBarBlockLayout } from "shared/ui/filter-bar-block-layout/filter-bar-block-layout";
import { Modal } from "shared/ui/modal/modal";
import st from "./styles.module.scss";

type FiltersBarType = {
  onClose?: () => void;
};

export const FiltersBar = React.memo((props: FiltersBarType) => {
  const screen = useScreen();
  console.log(screen);
  return (
    <div className={st.bar}>
      {screen !== "desktop" && (
        <div>
          <Button
            onClick={props.onClose}
            className={st.filter_button}
            icon={<Close />}
            variant="inherit"
            fullWidth
          >
            Закрыть
          </Button>
        </div>
      )}
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
