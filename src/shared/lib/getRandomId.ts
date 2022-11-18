const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomId = () => {
  const id = [];
  const letters = "qwertyuiopasdfghjklzxcvbnm";

  for (let i = 0; i < 16; i++) {
    if (getRandomInt(0, 2) === 1) {
      if (getRandomInt(0, 2) === 1) {
        id.push(letters[getRandomInt(0, letters.length)]);
      } else {
        id.push(letters[getRandomInt(0, letters.length)].toUpperCase());
      }
    } else {
      id.push(getRandomInt(0, 9));
    }
  }

  return id.join("");
};
