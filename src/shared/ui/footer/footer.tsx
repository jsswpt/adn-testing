import React from "react";
import st from "./styles.module.scss";

export const Footer = React.memo(() => {
  return (
    <footer className={st.footer}>
      <div className={st.container}>
        <div className={st.footer_top}>
          <div className={st.footer_wrap + " " + st.footer_wrap_first}>
            <ul className={st.footer_list}>
              <li className={st.footer_item}>
                <a href="#" className={st.footer_top_title}>
                  О компании
                </a>
              </li>
              <li className={st.footer_item}>
                <a href="#" className={st.footer_top_title}>
                  Новости и статьи
                </a>
              </li>
              <li className={st.footer_item}>
                <a href="#" className={st.footer_top_title}>
                  Акции
                </a>
              </li>
            </ul>
          </div>
          <div className={st.footer_wrap + " " + st.footer_wrap_second}>
            <ul className={st.footer_list}>
              <li className={st.footer_item}>
                <a href="#" className={st.footer_top_title}>
                  Часто задаваемые вопросы
                </a>
              </li>
              <li className={st.footer_item}>
                <a href="#" className={st.footer_top_title}>
                  Условия возврата
                </a>
              </li>
              <li className={st.footer_item}>
                <a href="#" className={st.footer_top_title}>
                  Правовая информация
                </a>
              </li>
            </ul>
          </div>
          <div className={st.footer_wrap + " " + st.footer_wrap_third}>
            <ul className={st.footer_list}>
              <li className={st.footer_item}>
                <p className={st.footer_top_title}>+7 (495) 727-01-81</p>
              </li>
              <li className={st.footer_item}>
                <p className={st.footer_top_title}>card@turbistore.ru</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={st.footer_bottom}>
          <p className={st.footer_title}>© 2021 Turbinary</p>
          <p className={st.footer_title}>Дизайн в ADN Digital Studio</p>
        </div>
      </div>
    </footer>
  );
});
