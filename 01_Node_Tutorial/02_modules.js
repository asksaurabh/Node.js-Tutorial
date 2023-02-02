// Node uses CommonJS library under the hood. Every file in Node is a module(by default).
// Modules -> nothing but encapsulated code (only share minimum)

const userNames = require("./02_01_names");
const greetUser = require("./02_02_utils");
const { userItems, userInfo } = require("./02_03_alternative_export");

// console.log(userNames);
greetUser(userNames.john);
greetUser(userNames.peter);
greetUser("Susan");

// This won't work as secret variable is not exported.
// greetUser(userNames.secret);

userItems.forEach((item) => {
  console.log(item);
});

console.log(userInfo.userName);
