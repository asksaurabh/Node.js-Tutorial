// Using the setInterval function.
// Run this using node app.js and not nodemon.

setInterval(() => {
  console.log("I'm the best");
}, 500);

console.log(
  "I'm not going to be offloaded to the system kernel. So, I run first"
);
// Process stays alive unless
// we kill the process using Ctrl + C.
