import { InputHTMLAttributes, useState } from "react";
import { CheckboxFilled } from "shared/assets/icons/ui-icons/checkbox-filled";
import { Checkbox as CheckboxIcon } from "shared/assets/icons/ui-icons/checkbox";

import st from "./styles.module.scss";

interface CheckboxType
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  onChange: () => void;
}

export const Checkbox = (props: CheckboxType) => {
  return (
    <button onClick={props.onChange} className={st.button}>
      {props.checked ? (
        <CheckboxFilled className={props.className + " " + st.icon} />
      ) : (
        <CheckboxIcon className={props.className + " " + st.icon} />
      )}
    </button>
  );
};
