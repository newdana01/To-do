const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');

router.get('/:todoId', todoController.getOneTodo);
router.post('/', todoController.createTodo);

module.exports = router;
