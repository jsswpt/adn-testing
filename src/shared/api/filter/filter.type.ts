import { Game } from "../game/game.type";

export type Filter = {
  id: number;
  func: (item: Game) => boolean;
};
