var express = require("express");
var app = express();
var http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 7221;

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  socket.on("text_input", function(text_output) {
    console.log("input -> " + text_output);
    io.emit("text_output", text_output);
  });
});

http.listen(PORT, function() {
  console.log("server listening. Port:" + PORT);
});
