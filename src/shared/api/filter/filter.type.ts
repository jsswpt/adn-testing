import { Game } from "../game/game.type";

export type Filter = {
  id: string;
  func: (item: Game) => boolean;
};

export type FilterFunc = Omit<Filter, "id">;
