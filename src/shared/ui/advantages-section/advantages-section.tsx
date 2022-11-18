import React from "react";
import { Keys } from "shared/assets/icons/util-icons/keys";
import { SalesBonuses } from "shared/assets/icons/util-icons/sales-bonuses";
import { Subtract } from "shared/assets/icons/util-icons/subtract";
import { TechnicalSupport } from "shared/assets/icons/util-icons/technical-support";
import { AdvantageCard } from "../advantage-card/advantage-card";

import st from "./styles.module.scss";

export const AdvantagesSection = React.memo(() => {
  return (
    <section className={st.advantages_section}>
      <div className={st.container}>
        <div className={st.advantages_grid}>
          <div className={st.advantage_item}>
            <AdvantageCard
              title="Регулярные акции, скидки и бонусы"
              icon={<SalesBonuses />}
            />
          </div>
          <div className={st.advantage_item}>
            <AdvantageCard
              title="Лицензионные ключи от официальных издателей"
              icon={<Keys />}
            />
          </div>
          <div className={st.advantage_item}>
            <AdvantageCard
              title="Гарантированная техподдержка вашей покупки"
              icon={<TechnicalSupport />}
            />
          </div>
          <div className={st.advantage_item}>
            <AdvantageCard
              title="Мгновенное получение ключа на почту и в личный кабинет"
              icon={<Subtract />}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
