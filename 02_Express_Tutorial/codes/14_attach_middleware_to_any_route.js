// App.use()
// apply middleware function to any routes

const express = require("express");
const { logger } = require("./middleware-func");
const app = express();

// Mount the middleware function at specified base path
// when the base of the requested path matches path in app.use().
// Attaches it to /api/products and /api/products/items.
app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("All Products");
});

app.get("/api/products/items", (req, res) => {
  res.send("Product items");
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
