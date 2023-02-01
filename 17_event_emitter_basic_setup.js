// Basic setup of events
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log("Data received.");
});

// Synchronously calls each of the listeners registered for the event named "response"
customEmitter.emit("response");
