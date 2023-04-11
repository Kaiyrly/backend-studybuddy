const { Task, NumberTypeTask, ToDoListTask } = require("../models/Task");


exports.createTask = async (req, res) => {
  try {
    let newTask;
    switch (req.body.taskType) {
      case "NumberType":
        newTask = new NumberTypeTask(req.body);
        break;
      case "ToDoList":
        newTask = new ToDoListTask({name: req.body.name, taskId: req.body.taskId, goalId: req.body.goalId, value: req.body.value.value, taskComplete: req.body.taskComplete});
        break;
      default:
        res.status(400).json({ message: "Invalid task type" });
        return;
    }

    await newTask.save();
    res.status(201).json({newTask, taskId: newTask.taskId});
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
};

exports.getTasks = async (req, res) => {
  const goalId = req.query.goalId;
  try {
    const tasks = await Task.find({ goalId: goalId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const taskId = req.params.id;
  try {
    let task;
    switch (req.body.taskType) {
      case "NumberType":
        task = await Task.findOneAndUpdate({ taskId: taskId }, req.body, { new: true }); 
        break;
      case "ToDoList":
        console.log({name: req.body.name, taskId: req.body.taskId, goalId: req.body.goalId, value: req.body.value.value, taskComplete: req.body.taskComplete})
        task = await Task.findOneAndUpdate({taskId: taskId}, { ...req.body, value: req.body.value.value}, {new: true});
        break;
      default:
        res.status(400).json({ message: "Invalid task type" });
        return;
    }

    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    // Update the task fields
    task.set({ ...req.body, value: req.body.value.value });
    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.taskId);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};