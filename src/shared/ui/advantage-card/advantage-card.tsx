import { SalesBonuses } from "shared/assets/icons/util-icons/sales-bonuses";
import st from "./styles.module.scss";

type AdvantageCardProps = {
  icon: React.ReactNode;
  title: string;
};

export const AdvantageCard = (props: AdvantageCardProps) => {
  return (
    <div className={st.card}>
      {props.icon}
      <p className={st.title}>{props.title}</p>
    </div>
  );
};
