import classNames from "classnames";
import { useEffect, useRef } from "react";
import { Game } from "shared/api/game/game.type";
import st from "./styles.module.scss";

interface GameCardProps extends Game {}

export const GameCard = (props: GameCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.backgroundImage = `url(${props.img})`;
    }
  }, [cardRef]);

  return (
    <div ref={cardRef} className={st.game_card}>
      <div className={st.bg_fade}></div>
      {props.condition !== "default" && (
        <div
          className={classNames(st.extra_element, {
            [st.new]: props.condition === "new",
            [st.sale]: props.condition === "sale",
          })}
        >
          <p
            className={classNames(st.extra_element_inner, {
              [st.new]: props.condition === "new",
              [st.sale]: props.condition === "sale",
            })}
          >
            {props.condition === "new" ? "Новинка" : "Скидка"}
          </p>
        </div>
      )}
      <div className={st.game_info}>
        <h4 className={st.name}>{props.name}</h4>
        {props.oldPrice && <p className={st.old_price}>{props.oldPrice}</p>}
        <p className={st.price}>{props.price}</p>
      </div>
    </div>
  );
};
