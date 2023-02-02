// Local : to this file(module) as we are not exporting it.
const secret = "Super Secret";

// Shared : As we are exporting these varibles to be used from any application.
const john = "John";
const peter = "Peter";

// console.log(module);

// Exporting an object containing names.
module.exports = {
  john,
  peter,
};

// console.log(module);
