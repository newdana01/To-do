const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');

router.get('/:todoId', todoController.getOneTodo);

module.exports = router;
