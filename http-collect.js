const http = require("http");

const concatStream = require("concat-stream");

const options = {
  hostname: process.argv[2],
  method: "GET",
};

const req = http.get(process.argv[2], (res) => {
  let firstLine = "";
  res.pipe(
    concatStream((data) => {
      firstLine += data.toString();
    })
  );
  res.on("end", () => {
    console.log(firstLine.length);
    console.log(firstLine);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
