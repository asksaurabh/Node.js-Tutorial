// Setup a blocking code.
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    // Blocking synchronous code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About Page");
  } else {
    res.end("Page doesn't exist.");
  }
});

server.listen(5000, () => {
  console.log("Server listening on port: 5000");
});

/*
This code creates an HTTP server using the "http" module in Node.js. When the server receives an HTTP request, the function passed to createServer is called, with req and res objects representing the incoming request and the server's response, respectively.

The function checks the URL of the incoming request, and based on the URL, writes a response to the client. For the URL "/about", a blocking synchronous code is executed, which loops through 1000x1000 iterations and logs the values of i and j for each iteration.

This code is blocking the event loop because the blocking code can take a long time to complete, during which the event loop cannot handle other incoming requests or perform other tasks. As a result, the server can become unresponsive to other clients while the blocking code is running, and the overall performance of the server can suffer.
*/

/* To create multiple users, open three tabs with localhost:5000 and localhost:5000/about and reload to give requests and see how request for localhost:5000 gets blocked while the blocking code of /about is getting executed.
 */
