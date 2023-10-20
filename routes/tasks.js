console.log("In the routes of tasks.js");

const express = require('express');


const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.post('/addTask',tasksController.addTask);
router.get('/toggleTask',tasksController.toggleTask);
router.get('/deleteTask',tasksController.deleteTask);


module.exports = router;