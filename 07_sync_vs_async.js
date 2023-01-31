// Using Callback APIs of fileSystem.
const fs = require("fs");

// See the console.log statements to see the asynchronosity.

console.log("Starting to read");
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

        console.log("Done with writing.");
      }
    );
  });
});

console.log("Starting a new task.");
