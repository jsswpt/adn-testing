import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import st from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  icon?: React.ReactNode;
  variant?: "inherit" | "outlined";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={classNames(
          st.button,
          props.className ? props.className : "",
          {
            [st.fullWidth]: props.fullWidth,
            [st.inherit]: props.variant === "inherit",
            [st.outlined]: props.variant === "outlined" || !props.variant,
            [st.with_icon]: props.icon,
          }
        )}
      >
        {props.icon && props.icon}
        {props.children}
      </button>
    );
  }
);
