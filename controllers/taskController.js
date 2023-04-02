const { Task, NumberTypeTask, ToDoListTask } = require("../models/Task");


exports.createTask = async (req, res) => {
  try {
    let newTask;

    switch (req.body.taskType) {
      case "NumberType":
        newTask = new NumberTypeTask(req.body);
        break;
      case "ToDoList":
        newTask = new ToDoListTask({name: req.body.name, id: req.body.id, goalId: req.body.goalId, value: req.body.value.value, taskComplete: req.body.taskComplete});
        break;
      default:
        res.status(400).json({ message: "Invalid task type" });
        return;
    }

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTasks = async (req, res) => {
  const goalId = req.query.goalId;
  console.log(goalId)
  try {
    const tasks = await Task.find({ goalId: goalId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  console.log(req.body)
  console.log(req.params)
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error.message);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};