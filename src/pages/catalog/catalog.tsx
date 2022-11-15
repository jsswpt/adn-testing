import classNames from "classnames";
import { GamesList } from "entities/game";
import { FiltersBar, Header } from "widgets";
import st from "./styles.module.scss";

export const Catalog = () => {
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
                <GamesList />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
