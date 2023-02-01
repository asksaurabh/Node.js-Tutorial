// read file asynchronously using promises.
const { readFile } = require("fs");

const getText = (filePath) => {
  return new Promise((resolve, reject) => {
    readFile(filePath, "utf-8", (err, fileData) => {
      if (err) {
        reject(err);
      } else {
        resolve(fileData);
      }
    });
  });
};

const filePath = "./content/first.txt";
getText(filePath)
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
