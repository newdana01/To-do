const { Todo } = require('../models/todos');

const getOneTodo = async (id) => {
  const todo = await Todo.findAll({ where: { id }, raw: true });
  return { todo };
};

module.exports = { getOneTodo };
