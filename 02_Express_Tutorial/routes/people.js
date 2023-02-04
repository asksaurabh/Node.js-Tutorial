// People router
const express = require("express");
let { people } = require("../data.js");
const router = express.Router();

// Remember: /api/people will direct to this router.
// Hence, Every route below starts after /api/people

// GET people
router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// POST using Axios.
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value." });
  }
  res.status(201).json({ success: true, person: name });
});

// Setup a route for testing in postman
router.post("/postman", (req, res) => {
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

// PUT new name to a particular id.
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;
  // console.log(id, newName);

  const person = people.find((user) => {
    return user.id === Number(id);
  });

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: "Can't find the person." });
  }
  const newPeople = people.map((user) => {
    if (user.id === Number(id)) {
      user.name = newName;
    }
    return user;
  });

  return res.status(200).json({ success: true, data: newPeople });
});

// DELETE from people
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((user) => {
    return user.id === Number(id);
  });

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: "Can't find the person." });
  }
  const newPeople = people.filter((user) => {
    if (user.id !== Number(id)) return user;
  });

  return res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
