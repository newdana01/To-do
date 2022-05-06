const TodoService = require('../service/todoService');

const getOneTodo = async (req, res, next) => {
  try {
    const todo = await TodoService.getOneTodo(req.params.todoId);
    return res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};

const err = (err, req, res) => {
  console.log(err);
  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = { getOneTodo };
