const express = require("express");
const { logger, authorize } = require("./middleware-func");
const morgan = require("morgan");
const app = express();

// Attach own middleware function
app.use("/api", [authorize, logger]);

// Attach built-in express middleware functions
// app.use(express.static("./public"));

// Attach a third party middleware function
app.use("/", morgan("tiny"));

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
  console.log(req.user); // This we set up in middleware func.
  res.send("Product items");
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
