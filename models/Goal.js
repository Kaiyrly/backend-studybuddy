const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  // Add userId field
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  goalId: {
    type: String,
    required: true,
  },
  goalAchieved: {
    type: Boolean,
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
  completionDate: {
    type: Date,
    default: null,
  }
});

module.exports = mongoose.model('Goal', goalSchema);
