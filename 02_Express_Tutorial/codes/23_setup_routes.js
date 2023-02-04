const express = require("express");
const people = require("./routes/people.js");
const auth = require("./routes/auth.js");
const app = express();

// Static assets
app.use(express.static("./methods-public"));
// Parse the payload
app.use(express.urlencoded({ extended: false }));
// Parse incoming json data from Axios.
app.use(express.json());

// Use the people router for base routes starting with "/api/people"
app.use("/api/people", people);

// Use the auth router
app.use("/login", auth);

// Listen Server.
app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
