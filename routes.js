const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const goalRoutes = require('./routes/goalRoutes');
const taskRoutes = require('./routes/taskRoutes'); 
const authRoutes = require('./routes/authRoutes');



router.use('/api/goals', goalRoutes);
router.use('/api/tasks', taskRoutes);
router.use('/api/auth', authRoutes);

module.exports = router;
