const { Todo } = require('../models/todos');

const getOneTodo = async (id) => {
  const todo = await Todo.findAll({ where: { id }, raw: true });
  return { todo };
};

const createTodo = async (name, completed, userId) => {
  try {
    const todo = await Todo.create({ name, completed, userId });
    return { todo };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { getOneTodo, createTodo };
