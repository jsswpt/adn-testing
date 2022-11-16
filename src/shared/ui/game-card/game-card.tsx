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
      <div className={st.extra_element}>
        {props.condition && props.condition}
      </div>
      <div className={st.game_info}>
        <h4 className={st.name}>{props.name}</h4>
        {props.oldPrice && <p className={st.old_price}>{props.oldPrice}</p>}
        <p className={st.price}>{props.price}</p>
      </div>
    </div>
  );
};
