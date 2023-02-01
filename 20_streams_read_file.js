const { createReadStream } = require("fs");

const stream = createReadStream("./content/bigFile.txt");

// Listen for the "data" event.
stream.on("data", (fileData) => {
  console.log(fileData);
});

// Now we are reading DATA in chunks. So, instead of reading everything and placing that in variable, we are reading in chunks.
