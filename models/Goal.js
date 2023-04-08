const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  goalId: {
    type: String,
    required: true,
  },
  tasks: {
    type: Array,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Goal', goalSchema);
