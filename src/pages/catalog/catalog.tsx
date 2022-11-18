import React, { Suspense, useState } from "react";
import classNames from "classnames";
import { gameModel } from "entities/game";
import { useEffect } from "react";
import { FiltersBar, Header } from "widgets";

import st from "./styles.module.scss";
import { Loader } from "shared/ui/loader/loader";
import { Button } from "shared/ui/button/button";
import { useScreen } from "shared/lib/useScreen";
import { Modal } from "shared/ui/modal/modal";
import { Footer } from "shared/ui/footer/footer";
import { AdvantagesSection } from "shared/ui/advantages-section/advantages-section";

const GamesList = React.lazy(
  () => import("entities/game/ui/games-list/games-list")
);

const Catalog = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const screen = useScreen();

  useEffect(() => {
    gameModel.getGamesFx();
  }, []);
  return (
    <>
      {screen !== "desktop" && (
        <Modal isOpen={isModalOpen}>
          <FiltersBar onClose={toggleModal} />
        </Modal>
      )}
      <Header />
      <main className={st.main}>
        <nav className={st.broadcrumb}>
          <div className={st.container}>Breadcrumb</div>
        </nav>
        <section className={st.catalog}>
          <div className={classNames(st.container, st.catalog_container)}>
            <div className={st.catalog_top}>
              <h1 className={st.title}>Каталог</h1>
              {screen !== "desktop" && (
                <Button className={st.button} onClick={toggleModal}>
                  Показать фильтры
                </Button>
              )}
            </div>
            <div className={st.catalog_middle}>
              {screen === "desktop" && <FiltersBar />}
              <div className={st.side}>
                <div className={st.games_wrap}>
                  <Suspense fallback={<Loader />}>
                    <GamesList />
                  </Suspense>
                </div>
                <div className={st.buy_games}>
                  <h3 className={st.buy_games_title}>Купить игры жанра Экшн</h3>
                  <p className={st.description_text}>
                    В разделе с играми{" "}
                    <a href="#" className={st.link}>
                      Экшен жанра
                    </a>
                    , вы найдете игры разнообразных форматов, будь-то с видом от
                    первого или от третьего лица, с одиночной кампанией или с
                    мультиплеером. В играх этого жанра Вас ждут большое
                    количество перестрелок, беготни и многого другого! Выбрав
                    понравившуюся, Вы можете купить игру жанра Экшен недорого и
                    приступить к ее прохождению! В игре Вас будут ждать
                    захватывающие задания, целью которых будет кого-то
                    освободить или кого-то захватить! Отправляйтесь в открытый
                    мир одиночной игры для ее изучения или же сразу познайте все
                    прелести мультиплеерного режима, если в игре таковой
                    имеется.
                  </p>
                </div>
                <div className={st.description}>
                  <h3 className={st.description_title}>
                    Подзаголовок уровня H4
                  </h3>
                  <p className={st.description_text}>
                    Как говорилось ранее, игры жанра Экшен могут быть с видами
                    от третьего или от первого лица. Зачастую эти игры имеют вид
                    от первого лица, но не исключено, что в ней будет несколько
                    режимов видов. Она вообще может иметь вид сбоку и быть 2D
                    платформером! Игры этого жанра могут иметь также возможность
                    играть в кооперативном режиме, так что не забудьте
                    пригласить в игру и своих друзей или найдите новых с помощью
                    специального поиска!
                  </p>
                  <p className={st.description_text}>
                    Для кооперативного режима в игре могут быть как{" "}
                    <a href="#" className={st.link}>
                      отдельные миссии
                    </a>
                    , так может быть и возможность пройти всю игру вместе с
                    друзьями и прожить все ее смешные и грустные моменты. Так
                    что скорее выбирайте себе игру для покупки, приглашайте в
                    нее друзей и отправляйтесь в захватывающий мир игр Экшен
                    жанра, которые подарят вам много часов веселья и
                    незабываемых миссий, которые вам надолго запомнятся!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AdvantagesSection />
      </main>
      <div className={st.container}>
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
