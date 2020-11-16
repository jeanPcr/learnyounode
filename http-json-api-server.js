const http = require("http");
const url = require("url");
const PORT = process.argv[2];
const server = http.createServer((req, res) => {
  //   let reqUrl = url.parse("http://" + req.headers.host + req.url);
  let reqUrl = new URL("http://" + req.headers.host + req.url);

  if (req.method === "GET") {
    if (reqUrl.pathname === "/api/parsetime") {
      console.log(reqUrl.searchParams["iso"]);
      //    
    } else if (reqUrl.pathname === "/api/unixtime") {
      //   let date = new Date(reqUrl.query);
      //   console.log(date);
      //   res.end();
    }
  }
});

server.listen(PORT);
