import classNames from "classnames";
import { useStore } from "effector-react";
import React, { useEffect, useRef, useState } from "react";
import { Close } from "shared/assets/icons/ui-icons/close";
import { Search } from "shared/assets/icons/ui-icons/search";
import { useScreen } from "shared/lib/useScreen";
import { Button } from "shared/ui/button/button";
import { Input } from "shared/ui/input/input";
import { model } from "../model";
import st from "./styles.module.scss";

export const SearchGame = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const screen = useScreen();

  useEffect(() => {
    if (screen !== "desktop") {
      window.addEventListener("click", (evt) => {
        if (
          !evt.composedPath().includes(inputRef.current!) &&
          !evt.composedPath().includes(buttonRef.current!)
        ) {
          setIsOpen(false);
        }
      });
    }
  }, [screen]);

  const query = useStore(model.$query);
  return (
    <>
      <div
        className={classNames(st.input_container, {
          [st.hidden]: screen !== "desktop" && !isOpen,
          [st.opened]: screen !== "desktop" && isOpen,
        })}
        ref={inputRef}
      >
        <div className={st.label}>
          <p className={st.label_inner}>Каталог</p>
        </div>
        <Input
          value={query}
          onChange={(evt) => model.queryEntered(evt.currentTarget.value)}
          fullWidth
          className={st.input}
          placeholder="Поиск"
        />
        <Search className={`${st.icon} ${st.search}`} />
      </div>
      {screen !== "desktop" && (
        <Button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className={st.button}
        >
          <Search className={st.icon_search} />
        </Button>
      )}
    </>
  );
});
