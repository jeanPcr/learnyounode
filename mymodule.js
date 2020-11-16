const fs = require("fs");
const path = require("path");

const dir = process.argv[2];
const ext = process.argv[3];

module.exports = function filterByExt(dir, ext, callback) {
  const filesList = [];
  try {
    fs.readdir(dir, { encoding: "utf-8" }, (err, files) => {
      if (err) return callback(err);
      files.forEach((file) => {
        if (ext === path.extname(file).split(".").pop("")) {
          filesList.push(file);
        }
      });
      return callback(null, filesList);
    });
  } catch (error) {
    return callback(error);
  }
};
