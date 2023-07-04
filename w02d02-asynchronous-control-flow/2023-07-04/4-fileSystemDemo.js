const fs = require("fs");
const readFile = fs.readFile;
const writeFile = fs.writeFile;

readFile("./a.txt", { encoding: "utf-8" }, (err, data) => {
  // Inside here is the only place where the file has been read
  console.log(data) // Callback queue
});

console.log("will this execute first? - yes") // Main stack

let fileContents = "";
const a = readFile("./a.txt", { encoding: "utf-8" }, (err, data) => {
  // Inside here is the only place where the file has been read
  fileContents = data; // Callback queue
  writeFile("output.txt", data, () => {});
});

console.log(fileContents); // Main stack, won't work because this will run before readFile has finished
