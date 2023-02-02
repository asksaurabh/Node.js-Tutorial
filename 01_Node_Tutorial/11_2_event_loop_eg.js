// See how the process stays alive by listening for requests.
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request just came in.");
  res.end("Hello World form Node.");
});

server.listen(5000, () => {
  console.log("Listening on port: 5000...");
});

// event loop calls the callback in createServer() as the new requests come in.
