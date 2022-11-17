import classNames from "classnames";
import { Checkbox } from "../checkbox/checkbox";

import st from "./styles.module.scss";
type FilterItemCheckboxProps = {
  value: boolean;
  title: string;
  onChange: () => void;
};

export const FilterItemCheckbox = (props: FilterItemCheckboxProps) => {
  return (
    <div className={st.item}>
      <Checkbox
        onChange={props.onChange}
        className={st.button}
        checked={props.value}
      />
      <p className={st.genre}>{props.title}</p>
    </div>
  );
};
