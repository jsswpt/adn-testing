import { FilterByGenre } from "feature";
import st from "./styles.module.scss";

export const FiltersBar = () => {
  return (
    <div className={st.bar}>
      <div className={st.block}>
        <FilterByGenre />
      </div>
    </div>
  );
};
