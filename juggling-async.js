const http = require("http");
const concatStream = require("concat-stream");

function getHttpRequest(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let firstLine = "";
      res.pipe(
        concatStream((data) => {
          firstLine += data.toString();
        })
      );
      res.on("end", () => {
        resolve(firstLine);
      });
      res.on("error", (error) => {
        reject(error);
      });
    });
  });
}

let urls = process.argv.slice(2);
(async () => {
  for (let i = 0; i < urls.length; i++) {
    console.log(await getHttpRequest(urls[i]));
  }
})();
