const http = require("http");
const fs = require("fs");
const PORT = process.argv[2];
const FILE = process.argv[3];

const server = http.createServer((req, res) => {
  const read = fs.createReadStream(FILE);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/file");
  read.pipe(res);
});

server.listen(PORT);
