// Send large chunk of data at once.
// Open the network tab to see the file size.

const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const fileData = fs.readFileSync("./content/bigFile.txt", "utf-8");
//   res.end(fileData);
// });

// server.listen(5000);

// Send data in chunks.
// You can ser the transfer encoding as chunked in response headers.

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream("./content/bigFile.txt", "utf-8");
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", () => {
    res.end(err);
  });
});
server.listen(5000);
