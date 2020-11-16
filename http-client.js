const http = require("http");

const req = http.get(process.argv[2], (res) => {
  res.on("data", (d) => {
    console.log(d.toString());
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
