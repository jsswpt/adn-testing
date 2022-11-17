import { FilterByGenre } from "feature";
import { FilterBarBlockLayout } from "shared/ui/filter-bar-block-layout/filter-bar-block-layout";
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
