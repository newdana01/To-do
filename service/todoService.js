const { Todo } = require('../models/todos');

const getOneTodo = async (id) => {
  const todo = await Todo.findAll({ where: { id }, raw: true });
  return { todo };
};

const getTodoList = async (limit, offset) => {
  try {
    const todoList = await Todo.findAll({
      attributes: ['id', 'name', 'completed'],
      order: ['id'],
      limit: limit,
      offset: (parseInt(offset) - 1) * parseInt(limit),
      raw: true,
    });
    return todoList;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { getOneTodo, getTodoList };
