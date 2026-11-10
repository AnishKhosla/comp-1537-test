const express = require("express");
const app = express();
app.use(express.json());
const fs = require("node:fs");
const path = require("node:path");

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));
app.use("/font", express.static("app/fonts"));
app.use("/app/data", express.static("app/data"));
console.log(path.resolve("app/data"))
app.get("/", function (req, res) {
    let doc = fs.readFileSync("./app/html/index.html", "utf8");
    res.send(doc);
});
let port = 8000;
app.listen(port, function () {
    console.log("It should work on 8000")
});
