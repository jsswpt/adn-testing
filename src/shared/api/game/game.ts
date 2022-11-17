import { Game } from "./game.type";

const games: Omit<Game, "id">[] = [
  {
    publisher: "Modern Wolf",
    genre: ["action", "adventure"],
    name: "ZERO Sievert",
    price: 710,
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1782120/header.jpg?t=1668530265",
    condition: "default",
    oldPrice: null,
  },
  {
    publisher: "Joey Drew Studios",
    genre: ["action", "adventure"],
    name: "Bendy and the Dark Revival",
    price: 515,
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1063660/header.jpg?t=1668499229",
    oldPrice: null,
    condition: "default",
  },
  {
    publisher: "SCS Software",
    genre: ["indie", "simulation"],
    name: "Euro Truck Simulator 2",
    price: 949,
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg?t=1668166019",
    oldPrice: null,
    condition: "default",
  },
  {
    publisher: "NetEase Games Global",
    genre: ["action", "adventure", "massively multiplayer"],
    name: "NARAKA: BLADEPOINT",
    price: 1199,
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1203220/header.jpg?t=1667553391",
    oldPrice: null,
    condition: "default",
  },
  {
    condition: "default",
    img: "https://shinobi-master-games.ru/images/Screenshots/GTA_5/GTA_5-247.jpg",
    name: "Grand Theft Auto V",
    oldPrice: 5000,
    price: 2500,
    genre: ["action", "open world"],
    publisher: "Rockstar",
  },
  {
    condition: "default",
    img: "https://media.vgm.io/albums/83/20838/20838-1369518223.jpg",
    name: "Red Dead Redemption",
    oldPrice: null,
    price: 3000,
    genre: ["action", "open world"],
    publisher: "Rockstar",
  },
  {
    condition: "default",
    img: "https://www.digiseller.ru/preview/398844/p1_2694211_12caa7b8.jpg",
    name: "Assasin's creed |",
    oldPrice: null,
    price: 3500,
    genre: ["action", "open world"],
    publisher: "Ubisoft",
  },
  {
    condition: "onSale",
    img: "https://i.playground.ru/e/d3kkyGdp-bepsovAhk3NHg.jpeg",
    name: "Assasin's creed ||",
    oldPrice: 4000,
    price: 2500,
    genre: ["action", "open world"],
    publisher: "Ubisoft",
  },
  {
    condition: "new",
    img: "https://gamebomb.ru/files/galleries/001/6/66/318258.jpg",
    name: "Cyberpunk 2077",
    oldPrice: null,
    price: 6000,
    genre: ["action", "open world"],
    publisher: "CD Projekt RED",
  },
  {
    condition: "new",
    img: "https://avatars.mds.yandex.net/i?id=9003f591d9bbddf968f4e8d8e6a2fc593c8ac9a8-5682239-images-thumbs&n=13&exp=1",
    name: "Minecraft",
    oldPrice: 2000,
    price: 129,
    genre: ["indie"],
    publisher: "Mojang",
  },
];

export const getGames = async () => {
  return new Promise<Game[]>((res) => {
    setTimeout(() => {
      res(
        games.map((item, idx) => {
          return {
            ...item,
            id: idx,
          };
        })
      );
    }, 500);
  });
};
