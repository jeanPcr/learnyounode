const fs = require("fs");
const path = require("path");

const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir, { encoding: "utf-8" }, (err, files) => {
  files.forEach((file) => {
    if (ext === path.extname(file).split(".").pop("")) {
      console.log(file);
    }
  });
});
