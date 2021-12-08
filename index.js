// REPL
// 1: js expression
// 2: use variables
// 3: multiline code
// 4: use(_) to get the last result
// 5: we can use editor mode

// write a file in node and write data in it.
// const fs = require("fs");
// fs.writeFileSync("read.txt", "My name is kamal.");
// fs.writeFileSync("read.txt", "My name is kamal kashyap.");
// fs.appendFileSync("read.txt", "i am live in ambala city");

// read data in file

// const buf_data = fs.readFileSync("read.txt");
// // console.log(buf_data);
// org_data = buf_data.toString();
// console.log(org_data);

// to rename file
// fs.renameSync("read.txt", "read_write.txt");

// create and write into a file
// const file = require("fs");
// file.writeFileSync("custom.css", "background-color:black;");
// // read a file
// let customCssBuffer = file.readFileSync("custom.css");
// // convert buffer to string type
// let customCss = customCssBuffer.toString();
// console.log(customCss);

// // creating webserver
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Hello World");
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("listing to port ");
// });

// const https = require("http");
// const server = https.createServer((req, res) => {
//   res.end("endd");
// });

// server.listen(3000, "127.0.0.1", () => {
//   console.log("creating server");
// });

// const http = require("http");

// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hello, World!</h1>");
// });

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`);
// });

// CRUD Operation
// Creating a folder
// const chalk = require("chalk");
// const validator = require("validator");

// console.log(chalk.bold.red.italic.underline("hello"));
// console.log(chalk.green("Sucess!!"));

// console.log(validator.isURL("abc.com"));

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Hello");
// });
// server.listen(9000, "127.0.0.1", () => {
//   console.log("listing to the server");
// });

const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.end("Home Page");
  } else if (req.url == "/about") {
    res.end("about us page");
  } else if (req.url == "/contact") {
    res.end("contact us page");
  } else {
    res.writeHead(404);
    res.end("<h1>404 Error Page</h1>");
  }
});
server.listen(900, "127.0.0.1", () => {
  console.log("working");
});
