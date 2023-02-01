// Directly return the promisified versions of read and write file.
const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const readFiles = async () => {
  try {
    const firstFileData = await readFile("./content/first.txt", "utf-8");
    const secondFileData = await readFile("./content/second.txt", "utf-8");
    await writeFile(
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
