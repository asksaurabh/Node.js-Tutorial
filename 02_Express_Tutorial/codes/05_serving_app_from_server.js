// Serving contents from an app.
const { readFileSync } = require("fs");
const http = require("http");

// Read all files.
const homePage = readFileSync("../navbar-app/index.html");
const homeLogic = readFileSync("../navbar-app/browser-app.js");
const homeStyles = readFileSync("../navbar-app/styles.css");
const homeLogo = readFileSync("../navbar-app/logo.svg");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // Styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // App logic.
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  // logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeLogo);
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
