// Setup query params to search for products that starts with a particular string and limit the output.
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

// Setup a query param
// http://localhost:5000/api/v1/query?search=a&limit=2
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // return res.status(200).send("No products found that matched query.");
    return res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
