// Serving contents from other html pages.
const { readFileSync } = require("fs");
const http = require("http");

// Read all files.
const homePage = readFileSync("./content/home.html");
const aboutPage = readFileSync("./content/about.html");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  const url = req.url;

  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // About page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(aboutPage);
    res.end();
  }
  // Unavailable Resource
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Error Not Found</h1>");
    res.end();
  }
});

server.listen(5000);
