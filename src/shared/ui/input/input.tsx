import classNames from "classnames";
import { InputHTMLAttributes } from "react";

import st from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: any;
  fullWidth?: boolean;
}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={classNames(st.input, props.className ? props.className : "", {
        [st.fullWidth]: props.fullWidth,
      })}
    />
  );
};
