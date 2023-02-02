// Revisit the basics of creating an http server

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("User is requesting.");
  res.end("<h1>Home Page for Me</h1>");
});

server.listen(5000);
