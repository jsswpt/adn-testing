import { FilterByGenre } from "feature";
import { useScreen } from "shared/lib/useScreen";
import { FilterBarBlockLayout } from "shared/ui/filter-bar-block-layout/filter-bar-block-layout";
import { Modal } from "shared/ui/modal/modal";
import st from "./styles.module.scss";

export const FiltersBar = () => {
  return (
    <div className={st.bar}>
      <FilterBarBlockLayout title="Жанр" withPopup>
        <FilterByGenre />
      </FilterBarBlockLayout>
    </div>
  );
};
