const http = require("http");

// Setting up various request endpoints.
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the home page");
  } else if (req.url === "/about") {
    res.end("Welcome to the about page.");
  } else {
    res.end(
      `<h1>OOPS</h1><p>We can't seem to find the page you requested.</p>`
    );
  }
});

server.listen(5000);
