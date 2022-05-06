const { Todo } = require('../models/todos');
const { User } = require('../models/users');

const getOneTodo = async (id) => {
  const todo = await Todo.findAll({ where: { id }, raw: true });
  return { todo };
};

const getTodoList = async (limit, offset) => {
  const todoList = await Todo.findAll({
    order: ['id'],
    include: [
      {
        model: User,
        attributes: ['name', 'age'],
        required: true,
      },
    ],
    limit: limit,
    offset: (parseInt(offset) - 1) * parseInt(limit),
  });
  return { todoList };
};

module.exports = { getOneTodo, getTodoList };
