// Create a resource to get only id name and image of all products.

const express = require("express");
const { products } = require("./data.js");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><a href="/api/products">Products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
