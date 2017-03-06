// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a NoteSchema with the Schema class
var ToDoSchema = new Schema({
  // title: a string
  todo: {
    type: String
  },
  // body: a string
  createdBy: {
    type: String
  }
});

// Make a Note model with the NoteSchema
var ToDo = mongoose.model("ToDo", ToDoSchema);

// Export the Note model
module.exports = ToDo;