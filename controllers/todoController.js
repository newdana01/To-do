const TodoService = require('../service/todoService');

const getOneTodo = async (req, res, next) => {
  try {
    const todo = TodoService.getOneTodo(req.query.param);
    return res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};

const createTodo = async (req, res, next) => {
  try {
    const { name, completed, userId } = req.body;
    const todo = await TodoService.createTodo(name, completed, userId);
    return res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    await TodoService.deleteTodo(req.params.todoId);
    return res.status(204).json();
  } catch (err) {
    next(err);
  }
};

const err = (err, req, res) => {
  console.log(err);
  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = { getOneTodo, createTodo, deleteTodo, err };
