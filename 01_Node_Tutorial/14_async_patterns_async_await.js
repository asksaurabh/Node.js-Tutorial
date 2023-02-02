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

const readFiles = async () => {
  try {
    const firstFileData = await getText("./content/first.txt");
    const secondFileData = await getText("./content/second.txt");

    console.log(`First file: ${firstFileData}`);
    console.log(`Second File: ${secondFileData}`);
  } catch (err) {
    console.log(err);
  }
};
readFiles();

// getText(filePath)
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

/*
This code is executing the two file reads sequentially, one after the other. The await keyword is used to wait for the result of each file read operation before moving on to the next one.
*/
