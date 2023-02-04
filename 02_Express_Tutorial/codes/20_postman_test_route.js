const express = require("express");
let { people } = require("./data");
const app = express();

// Static assets
app.use(express.static("./methods-public"));
// Parse the payload
app.use(express.urlencoded({ extended: false }));
// Parse incoming json data from Axios.
app.use(express.json());

// GET people
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// POST using Axios.
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value." });
  }
  res.status(201).json({ success: true, person: name });
});

// Setup a route for testing in postman
app.post("/api/postman/people", (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide the userName." });
  }

  res
    .status(201)
    .json({ success: true, data: [...people, { id: 5, name: userName }] });
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

// Listen Server.
app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
