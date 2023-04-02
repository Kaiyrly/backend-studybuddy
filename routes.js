const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const goalRoutes = require('./routes/goalRoutes');
const taskRoutes = require('./routes/taskRoutes'); // If you have a separate file for task routes, im

// // Mock data for tasks
// const tasks = [
//   new NumberTypeTask({
//     name: "Demo Task Name",
//     id: "2",
//     goalId: "1",
//     value: {
//       initialValue: 0,
//       currentValue: 0,
//       targetValue: 100
//     },
//     taskComplete: true,
//     taskType: "NumberType"
//   }),
//   new ToDoListTask({
//     name: "New Task Name",
//     id: "2",
//     goalId: "1",
//     value: [
//       {
//         name: "Create some subtask",
//         value: false
//       },
//       {
//         name: "Create another subtask",
//         value: true
//       },
//       {
//         name: "This subtask is omg",
//         value: false
//       }
//     ],
//     taskComplete: true,
//     taskType: "ToDoList"
//   })
// ];

// const goals = [
//   {name: "Demo Goal Name", id: 1, tasks: [], imgUrl: "arnold.png"},

//   {name: "New Goal Name", id: 2, tasks: [], imgUrl: "arnold.png"}
// ];

router.use('/api/goals', goalRoutes);
router.use('/api/tasks', taskRoutes);

module.exports = router;
