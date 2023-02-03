// Introduction to params - Provide info about one specific requested product.
// Setup route params to display info about specific product.

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

app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  const requestedProduct = products.find((product) => {
    return product.id === Number(productID);
  });

  if (!requestedProduct) {
    return res.status(404).send("Product not found");
  }
  res.json(requestedProduct);
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
