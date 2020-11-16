const filterByExt = require("./mymodule");

filterByExt(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.forEach((file) => {
      console.log(file);
    });
  }
});
