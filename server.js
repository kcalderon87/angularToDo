// Dependencies
var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
//express
var app = express();
var port = 3000;
//models
var Todo = require("./app/models/ToDo.js");

// configuration
mongoose.Promise = Promise;

app.use(express.static(__dirname + "/app"));

// DB
mongoose.connect("mongodb://localhost/angularToDo");
//mongoose.connect("mongodb://heroku_dnwxr6vh:lvtfhtjt0qqdshhoqaog9cftvo@ds123370.mlab.com:23370/heroku_dnwxr6vh");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
    app.get('/api/todos', function(req, res) {

        // find
        Todo.find({},function(err, todos) {

            if (err){
              res.send(err);
            }
            res.json(todos);
        });
    });

// post
    app.post('/api/todos', function(req, res) {
      console.log(req.body);

        var entry = new Todo(req.body);
        entry.save(function(err, doc) {
          if (err) {
            res.json(err);
          }
          else {
            console.log(doc);
            res.json(doc);
          }
        });
    });

app.listen(port, function() {
    console.log("listening on port:" + port);
});