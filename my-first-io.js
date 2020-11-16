const fs = require("fs");
const file = process.argv[2];

let linecompter = -1;

// read contents of the file
const data = fs.readFileSync(file, "UTF-8");

// split the contents by new line
const lines = data.split(/\n/);

// print all lines
lines.forEach((line) => {
  linecompter++;
});

console.log(linecompter);
