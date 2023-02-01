// Various other aspects of EventEmitter.
// Order in which these on and emit methods appear matters.

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.emit("response"); // There is no response event to listen to yet.

customEmitter.on("response", (userName, id) => {
  console.log(`Data received: ${userName} and ${id}`);
});
customEmitter.on("response", () => {
  console.log("Try writing some other logic");
});

customEmitter.emit("response", "Saurabh", 10010);
