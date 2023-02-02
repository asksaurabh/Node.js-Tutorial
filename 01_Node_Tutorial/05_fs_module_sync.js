// Using Sychronous APIs of filesystem.

const fs = require("fs");

// .readFileSync() and .writeFileSync()
// reads and writes into a file synchronously.

const newFileContents = fs.readFileSync("./content/newFile.txt", "utf-8");
console.log(newFileContents);

// .writeFileSync()
// Create a new file if there isn't one or if there is one then override the values.
fs.writeFileSync("./content/fileSync.txt", "Say hello from NodeJS");
fs.writeFileSync(
  "./content/newFile.txt",
  "This file is now being overwritten and its previous contents are lost."
);

// Append data to a file instead of overwriting it.
fs.writeFileSync(
  "./content/newFile.txt",
  "This is the appended data to the previous data.",
  {
    flag: "a",
  }
);
