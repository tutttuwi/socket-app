var express = require("express");
var app = express();
var http = require("http").Server(app);
const io = require("socket.io")(http);
const fs = require("fs");
const PORT = process.env.PORT || 7221;
const PATH_DATA = "data/";

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  socket.on("title_input", function(title_output) {
    console.log("input -> " + title_output);
    io.emit("title_output", title_output);
  });
  socket.on("memo_input", function(memo_output) {
    console.log("input -> " + memo_output);
    io.emit("memo_output", memo_output);
  });
  socket.on("regist", function(out) {
    fs.writeFile(PATH_DATA + out.title, out.memo, err => {
      return;
    });
    io.emit("clear", null);
  });
});

http.listen(PORT, function() {
  console.log("server listening. Port:" + PORT);
});
