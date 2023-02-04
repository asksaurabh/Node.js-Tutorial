const express = require("express");
let { people } = require("./data");
const app = express();

// Static assets
app.use(express.static("./methods-public"));
// Parse the payload
app.use(express.urlencoded({ extended: false }));

// GET people
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// POST form data
app.post("/login", (req, res) => {
  // console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}.`);
  }

  res.status(401).send("Please provide Credentials.");
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
