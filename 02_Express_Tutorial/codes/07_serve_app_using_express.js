// Serve the navbar app.
const express = require("express");
const path = require("path");
const app = express();

// Set up static and middleware
app.use(express.static("./public"));

// Get the root.
app.get("/", (req, res) => {
  console.log(req.url);
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

// Unavailable resources
app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
