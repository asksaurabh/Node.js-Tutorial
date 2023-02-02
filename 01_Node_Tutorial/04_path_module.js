// Path module
const path = require("path");

// Separator property.
// returns a platform specific path segment separator.

console.log(`Your path separator: ${path.sep}`);

// .join() method.
// Joins a sequence of path segments using platform specific separator as a delimiter and returns the normalized path.

const filePath = path.join("/content", "testfolder", "text.txt");
console.log(filePath);

// .basename() method
// Returns the last portion of the path.

const testFileName = path.basename(filePath);
console.log(testFileName);

const currentFileName = path.basename(__filename);
console.log(currentFileName);

// .resolve() -> Gets the absolute path.

const absolutePath = path.resolve(
  __dirname,
  "content",
  "testfolder",
  "text.txt"
);
console.log(absolutePath);
