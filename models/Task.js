// Task.js
const mongoose = require("mongoose");

const baseOptions = {
  discriminatorKey: "taskType",
  collection: "tasks",
};

const TaskSchema = new mongoose.Schema({
  name: String,
  id: String,
  goalId: String,
  taskComplete: Boolean,
}, baseOptions);

const NumberTypeSchema = new mongoose.Schema({
  value: {
    name: String,
    value: Boolean,
    initialValue: Number,
    currentValue: Number,
    targetValue: Number,
  }
});

const ToDoListSchema = new mongoose.Schema({
  value: [
    {
      name: String,
      value: Boolean,
    },
  ],
}, baseOptions);


const Task = mongoose.model("Task", TaskSchema);
const NumberTypeTask = Task.discriminator("NumberType", NumberTypeSchema);
const ToDoListTask = Task.discriminator("ToDoList", ToDoListSchema);
module.exports = { Task, NumberTypeTask, ToDoListTask };
