const fs = require("fs");

// косой скрипт для изменения иконки с txt или svg формата в tsx с сниппетом

fs.readdir("./", (err, files) => {
  files.forEach((item) => {
    fs.readFile(item, "utf-8", (err, data) => {
      if (item !== "script.js" && !item.includes(".tsx")) {
        const inner = data;

        let name = item.split("");

        name.forEach((letter, idx) => {
          if (letter === ".") {
            if (
              name[idx + 1] !== "t" ||
              name[idx + 2] !== "s" ||
              name[idx + 3] !== "x"
            ) {
              name[idx + 1] = "t";
              name[idx + 2] = "s";
              name[idx + 3] = "x";
            }
          }
        });

        name[0] = name[0].toUpperCase();

        const newInner = `
        import {IconType} from "../icon.type"

        export const ${item} = (props:IconType) => {
            return (
                <>
                ${inner}
                </>
            )
        }
      `;

        fs.writeFile(item, newInner, "utf-8", (err) => {
          if (err) {
            console.log("Error", err);
          }
        });

        fs.rename(item, name.join(""), (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  });
});
