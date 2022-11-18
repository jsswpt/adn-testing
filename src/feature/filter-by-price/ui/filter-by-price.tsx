import { useStore } from "effector-react";
import { Input } from "shared/ui/input/input";
import { model } from "../model";

import st from "./styles.module.scss";

export const FilterByPrice = () => {
  const minPrice = useStore(model.$minPrice);
  const maxPrice = useStore(model.$maxPrice);
  return (
    <div className={st.filter_by_price}>
      <div className={st.input_container}>
        <Input
          onChange={(evt) => model.setMinPrice(Number(evt.currentTarget.value))}
          type="number"
          placeholder="От"
          min={1}
          rounded="full"
          className={st.input + " " + st.input_from}
          value={minPrice}
        />
        <Input
          onChange={(evt) => model.setMaxPrice(Number(evt.currentTarget.value))}
          type="number"
          placeholder="До"
          rounded="full"
          className={st.input + " " + st.input_to}
          value={maxPrice}
        />
      </div>
      <p className={st.idk}>Не придумал, как сделать слайдер</p>
    </div>
  );
};
