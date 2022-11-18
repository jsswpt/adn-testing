import React from "react";

import { LogoFill } from "shared/assets/icons/media-icons/Logo-fill";
import { Cart } from "shared/assets/icons/ui-icons/cart";
import { Favorite } from "shared/assets/icons/ui-icons/favorite";
import { Login } from "shared/assets/icons/ui-icons/log-in";
import { SearchGame } from "feature";

import classNames from "classnames";
import st from "./styles.module.scss";
import { useScreen } from "shared/lib/useScreen";
import { Menu } from "shared/assets/icons/ui-icons/menu";

export const Header = React.memo(() => {
  const screen = useScreen();
  return (
    <header className={st.header}>
      <div className={st.container}>
        <div className={classNames(st.header_wrap, st.logo_wrap)}>
          <LogoFill className={st.logo} />
        </div>
        {screen === "desktop" && (
          <div className={classNames(st.header_wrap, st.input_wrap)}>
            <SearchGame />
          </div>
        )}
        <nav className={classNames(st.header_wrap, st.nav_wrap)}>
          <ul className={st.nav_list}>
            {screen !== "desktop" && (
              <li className={st.nav_list_item}>
                <SearchGame />
              </li>
            )}
            {screen === "desktop" && (
              <>
                <li className={st.nav_list_item}>
                  <Login className={st.icon} />
                </li>
                <li className={st.nav_list_item}>
                  <Favorite className={st.icon} />
                </li>
              </>
            )}
            <li className={st.nav_list_item}>
              <Cart className={st.icon} />
            </li>
            {screen !== "desktop" && <Menu className={st.icon} />}
          </ul>
        </nav>
      </div>
    </header>
  );
});
