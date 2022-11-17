import React, { Suspense } from "react";
import classNames from "classnames";
import { gameModel } from "entities/game";
import { useEffect } from "react";
import { FiltersBar, Header } from "widgets";

import st from "./styles.module.scss";
import { Loader } from "shared/ui/loader/loader";

const GamesList = React.lazy(
  () => import("entities/game/ui/games-list/games-list")
);

const Catalog = () => {
  useEffect(() => {
    gameModel.getGamesFx();
  }, []);
  return (
    <>
      <Header />
      <main className={st.main}>
        <nav className={st.broadcrumb}>
          <div className={st.container}>broadcrumb</div>
        </nav>
        <section className={st.catalog}>
          <div className={classNames(st.container, st.catalog_container)}>
            <div className={st.catalog_top}>
              <h1 className={st.title}>Каталог</h1>
            </div>
            <div className={st.catalog_middle}>
              <FiltersBar />
              <div className={st.games_wrap}>
                <Suspense fallback={<Loader />}>
                  <GamesList />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Catalog;
