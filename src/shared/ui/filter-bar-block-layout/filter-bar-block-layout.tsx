import { useState } from "react";
import classNames from "classnames";
import st from "./styles.module.scss";
import { Slider } from "shared/assets/icons/ui-icons/slidder-up";

type FilterBarBlockLayoutProps = {
  children?: React.ReactNode;
  title?: string;
  withPopup?: boolean;
};

export const FilterBarBlockLayout = (props: FilterBarBlockLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={classNames(st.wrap)}>
      <div className={st.top}>
        <p className={st.title}>{props.title}</p>
        {props.withPopup && (
          <button className={st.button} onClick={() => setIsOpen(!isOpen)}>
            <Slider
              className={classNames(st.slider, {
                [st.reversed]: !isOpen,
              })}
            />
          </button>
        )}
      </div>
      {props.children && (
        <div
          className={classNames(st.middle, {
            [st.closed]: props.withPopup && !isOpen,
            [st.opened]: props.withPopup && isOpen,
          })}
        >
          {props.children}
        </div>
      )}
    </div>
  );
};
