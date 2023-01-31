// Globals -> Which is available anywhere in your application without the need to import any module.

// There is no window object in Node.

// Some of the useful global variables are:

// __dirname  = path to the current directory
// __filename = current file name
// require    = function to use/import modules (CommonJS)
// module     = info about the current module(file)
// process    = info about the env where the program is running

// process object becomes helpful when you deploy your app to a server. Then you will be able to see the environment specs on which your app is running on.

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);

// Other things which are available globally

// console
// setInterval
// setTimeOut

console.log("Hello Saurabh");

setTimeout(() => {
  console.log("Using the setTimeOut");
}, 1000);

setInterval(() => {
  console.log("Press Ctrl + C to Break Free");
}, 500);
