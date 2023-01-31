// Create a http web server

const http = require("http");

// Create a web server
const server = http.createServer((req, res) => {
  res.write("Welcome to my Node App.");
  res.end();
});
server.listen(5000);
