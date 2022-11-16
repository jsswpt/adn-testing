export type Game = {
  id: number;
  name: string;
  price: number;
  oldPrice: number | null;
  condition: "onSale" | "new" | "default";
  img: string;
  genre: string[];
  publisher: string;
};
