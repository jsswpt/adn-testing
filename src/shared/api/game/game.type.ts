export type Game = {
  id: number;
  name: string;
  price: number;
  oldPrice: number | null;
  condition: "sale" | "new" | "default";
  img: string;
  genre: string[];
  publisher: string;
};
