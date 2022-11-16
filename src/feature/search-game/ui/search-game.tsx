import React from "react";
import { Search } from "shared/assets/icons/ui-icons/search";
import { Input } from "shared/ui/input/input";
import st from "./styles.module.scss";

export const SearchGame = React.memo(() => {
  return (
    <div className={st.input_container}>
      <div className={st.label}>
        <p className={st.label_inner}>Каталог</p>
      </div>
      <Input fullWidth className={st.input} placeholder="Поиск" />
      <Search className={`${st.icon} ${st.search}`} />
    </div>
  );
});
