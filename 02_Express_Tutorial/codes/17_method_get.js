// HTTP Methods
const express = require("express");
let { people } = require("./data");
const app = express();

// GET people
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
