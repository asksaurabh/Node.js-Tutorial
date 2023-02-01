const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Welcome");
// });

// Using EventEmitter API
const server = http.createServer();

// listens for request event/ responds to it.
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
