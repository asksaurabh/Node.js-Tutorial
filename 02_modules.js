// Node uses CommonJS library under the hood. Every file in Node is a module(by default).
// Modules -> nothing but encapsulated code (only share minimum)

const john = "John";
const peter = "Peter";
const secret = "Super Secret";

const greetUser = (firstName) => {
  console.log(firstName);
};

greetUser(john);
greetUser(peter);
greetUser("Susan");
