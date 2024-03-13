const http = require("node:http");
const fs = require("node:fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const fileName = "message.txt";
  const folder = "edwin";
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
const day = String(currentDate.getDate()).padStart(2, '0'); 
const hours = String(currentDate.getHours()).padStart(2, '0'); 
const minutes = String(currentDate.getMinutes()).padStart(2, '0'); 
const seconds = String(currentDate.getSeconds()).padStart(2, '0'); 
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  try {
    fs.appendFileSync(`./${folder}/${fileName}`, `Current Date and Time: ${formattedDateTime}`);
    const files = fs.readdirSync("./edwin");
  console.log(files);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<html>
            <head>
            <title>Result</title>
            </head>
            <body>
            <h1>${fileName} creation inside ${folder} folder successful</h1>
            </body>
                </html >`);
  } catch (err) {
    // Handle the error
    console.log(err);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ happily`);
});
