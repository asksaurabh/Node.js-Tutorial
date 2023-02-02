const os = require("os");

// Info about the current user.
// userInfo() method.

const currentUser = os.userInfo();
console.log(currentUser);

// .uptime() -> Gets the uptime of the system in seconds.

const uptime = os.uptime();
console.log(`Your system is running from ${uptime} seconds.`);

// A few of other useful methods.
const currentOS = {
  osName: os.type(),
  osRelease: os.release(),
  freeMemory: `${os.freemem()} in bytes`,
  totalMemory: `${os.totalmem()} in bytes`,
};

console.log(currentOS);
