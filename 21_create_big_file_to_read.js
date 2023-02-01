// Create a big file in content folder to read.

const { writeFileSync } = require("fs");

for (let i = 0; i < 1000; i++) {
  writeFileSync("./content/bigFile.txt", `Add large data: ${i}\n`, {
    flag: "a",
  });
}
