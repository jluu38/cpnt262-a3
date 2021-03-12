const { static } = require('express');
const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");


app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(request, response){
  respons.send();
});

app.get("*", function(request, response) {
  const error = path.join(__dirname, "public/404.html");
  response.sendFile(error);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`listening on port: ${PORT}`);
})

// from W9T
// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

// app.listen(8080);