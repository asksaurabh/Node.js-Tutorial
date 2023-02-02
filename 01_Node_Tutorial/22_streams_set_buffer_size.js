// Setup the buffer size and encoding while reading a big file.
const { createReadStream } = require("fs");

const stream = createReadStream("./content/bigFile.txt", {
  highWaterMark: 50,
  // encoding: "utf-8",
});

// highWaterMark -> controls size of the buffer(Reads specified size at a time)

stream.on("data", (fileData) => {
  console.log(fileData);
});
stream.on("error", (err) => {
  console.log(err);
});
