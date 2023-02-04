// Controllers for people router
let { people } = require("../data.js");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value." });
  }
  res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide the userName." });
  }

  res
    .status(201)
    .json({ success: true, data: [...people, { id: 5, name: userName }] });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
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
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
