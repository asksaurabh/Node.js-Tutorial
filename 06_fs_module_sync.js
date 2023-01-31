// Using Callback APIs of fileSystem.
const fs = require("fs");

// .readFile() and .writeFile()
// Write the contents of the first.txt and second.txt inside fileAysnc.txt
// Using callback hell to do things asynchronously.

fs.readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const firstFileContents = result;
  fs.readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const secondFileContents = result;

    fs.writeFile(
      "./content/fileAsync.txt",
      `Here are the two contents in one: ${firstFileContents} : ${secondFileContents}`,
      {
        flag: "a",
      },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        // Write file doesn't return anthing so, this should be undefined.
        console.log(result);
      }
    );
  });
});
