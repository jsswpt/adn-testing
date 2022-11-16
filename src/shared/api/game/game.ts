import { Game } from "./game.type";

const games: Omit<Game, "id">[] = [
  {
    condition: "default",
    img: "https://shinobi-master-games.ru/images/Screenshots/GTA_5/GTA_5-247.jpg",
    name: "Grand Theft Auto V",
    oldPrice: 5000,
    price: 2500,
  },
  {
    condition: "default",
    img: "https://media.vgm.io/albums/83/20838/20838-1369518223.jpg",
    name: "Red Dead Redemption",
    oldPrice: null,
    price: 3000,
  },
  {
    condition: "default",
    img: "https://www.digiseller.ru/preview/398844/p1_2694211_12caa7b8.jpg",
    name: "Assasin's creed |",
    oldPrice: null,
    price: 3500,
  },
  {
    condition: "onSale",
    img: "https://i.playground.ru/e/d3kkyGdp-bepsovAhk3NHg.jpeg",
    name: "Assasin's creed ||",
    oldPrice: 4000,
    price: 2500,
  },
  {
    condition: "new",
    img: "https://gamebomb.ru/files/galleries/001/6/66/318258.jpg",
    name: "Cyberpunk 2077",
    oldPrice: null,
    price: 6000,
  },
];

export const getGames = async () => {
  return new Promise<Game[]>((res) => {
    setTimeout(() => {
      res(
        games.map((item, idx) => {
          return {
            condition: item.condition,
            img: item.img,
            name: item.name,
            oldPrice: item.oldPrice,
            price: item.price,
            id: idx,
          };
        })
      );
    }, 3000);
  });
};
