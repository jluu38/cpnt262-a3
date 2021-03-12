// modules
const express = require('express');
const app = express();
const path = require("path");
require('dotenv').config();

// static file serving middleware
app.use(express.static(path.join(__dirname, "public")));

// 404 error page
app.use(function(request, response) {
  const error = path.join(__dirname, "public/404.html");

  response.status(404);
  response.sendFile(error);
});

// env variables w/ default port
const HOST = process.env.HOST;
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on ${HOST}:${PORT}`);
});