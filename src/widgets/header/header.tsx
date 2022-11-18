import React from "react";

import classNames from "classnames";
import { LogoFill } from "shared/assets/icons/media-icons/Logo-fill";
import { Cart } from "shared/assets/icons/ui-icons/cart";
import { Favorite } from "shared/assets/icons/ui-icons/favorite";
import { Login } from "shared/assets/icons/ui-icons/log-in";
import { Search } from "shared/assets/icons/ui-icons/search";
import { Input } from "shared/ui/input/input";
import st from "./styles.module.scss";
import { SearchGame } from "feature";

export const Header = React.memo(() => {
  return (
    <header className={st.header}>
      <div className={st.container}>
        <div className={classNames(st.header_wrap, st.logo_wrap)}>
          <LogoFill />
        </div>
        <div className={classNames(st.header_wrap, st.input_wrap)}>
          <SearchGame />
        </div>
        <nav className={classNames(st.header_wrap, st.nav_wrap)}>
          <ul className={st.nav_list}>
            <li className={st.nav_list_item}>
              <Login className={st.icon} />
            </li>
            <li className={st.nav_list_item}>
              <Favorite className={st.icon} />
            </li>
            <li className={st.nav_list_item}>
              <Cart className={st.icon} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});
