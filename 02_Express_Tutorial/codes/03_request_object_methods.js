// Various properties of request object.
const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  const url = req.url;

  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  }
  // About page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>This is the About Page</h1>");
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
