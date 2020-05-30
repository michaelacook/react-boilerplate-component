#!/usr/bin/env node

const getArgs = require("./src/getArguments.js");
const writeFile = require("./src/writeFile.js");
const help = require("./src/help.js");

const args = getArgs();

if (args[0] === "--help" || args[0] === "-h") {
  help();
  process.exit();
}

if (typeof args === "undefined") {
  process.stderr.write("You must specify a file name. \n");
  process.exit();
} else if (args[1] === "--class") {
  writeFile(args[0], true);
} else {
  writeFile(args[0]);
}
