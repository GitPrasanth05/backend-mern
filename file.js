// const fs = require("fs");
// const { json } = require("stream/consumers");

// fs.readFileSync it reads file asynchronously

// fs.readFile("./sample.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("there is an error in the file ");
//     return;
//   }
//   console.log(data);
// });

// const http = require("http");
// const fs = require("fs");

// fs.readFile("./sample.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("there is an error in the file ");
//     return;
//   }
//   const users = JSON.parse(data);

//   const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify(users));
//     res.end();
//   });
//   server.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
//   });
// });

const http = require("http");
const fs = require("fs");
const { stringify } = require("querystring");

fs.readFile("./sample.json", "utf-8", (err, data) => {
  if (err) {
    console.log("cannot open file");
    return;
  }
  const jsonData = JSON.parse(data);
  const filterdData = jsonData.filter((user) => user.amount > 1000);
  fs.writeFile("./sample.json", JSON.stringify(filterdData), (err) => {
    if (err) {
      console.log("Error writing the file");
      return;
    }
  });
});

const fs = require('fs');
const create =((student)=>{
    let students =[]
    fs.readline(`./students.json`,'utf-8',(error))

})