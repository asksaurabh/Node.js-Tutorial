// Serve the navbar app.
const express = require("express");
const path = require("path");
const app = express();

// Set up static and middleware
// Serving index.html from public static folder.
app.use(express.static("./public"));

// Instead of sending index.html separately, two other options:
// 1. Add this to your public static directory
// 2. Server side rendering : use template engine.

// Get the root.
// app.get("/", (req, res) => {
//   console.log(req.url);
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

// Unavailable resources
app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
