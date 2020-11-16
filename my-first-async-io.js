const fs = require("fs");
let lines = 0;
const contents = fs.readFile(process.argv[2], (err, data) => {
  lines += data.toString().split("\n").length - 1;
  console.log(lines);
});
