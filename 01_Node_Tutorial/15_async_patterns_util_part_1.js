const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const readFiles = async () => {
  try {
    const firstFileData = await readFilePromise("./content/first.txt", "utf-8");
    const secondFileData = await readFilePromise(
      "./content/second.txt",
      "utf-8"
    );
    await writeFilePromise(
      "./content/usingUtil.txt",
      `First File: ${firstFileData} and Second File: ${secondFileData}`,
      {
        flag: "a",
      }
    );
  } catch (err) {
    console.log(err);
  }
};
readFiles();

// const getText = (filePath) => {
//   return new Promise((resolve, reject) => {
//     readFile(filePath, "utf-8", (err, fileData) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(fileData);
//       }
//     });
//   });
// };

// getText(filePath)
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));
