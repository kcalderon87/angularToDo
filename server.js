// Dependencies
var express = require("express");
var mongoose = require("mongoose");
// Bring in our Models: Not and User
var ToDo = require("./models/ToDo.js");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();
var port = 3000;

app.use(express.static(__dirname + "/app"));

app.listen(port, function() {
    console.log("listening on port:" + port);
});

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/angularToDo");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Mongoose success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Creating an example through mongoose
var exampleToDo = new ToDo({
  todo: "Learn more about AngularJS directives",
  completeBy: '1974-07-18T00:00:00Z'
});
// Using the save method in mongoose
exampleToDo.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});



