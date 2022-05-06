const sequelize = require('sequelize');

const { Todo } = require('../models/todos');

const getOneTodo = async (id) => {
  try {
    const todo = await Todo.findOne({
      where: { id },
      attributes: [
        'id',
        'name',
        'completed',
        'created_at',
        'updated_at',
        'completed_at',
      ],
      raw: true,
    });
    if (!todo) {
      throw new Error('Todo does not exist');
    }
    return todo;
  } catch (err) {
    throw new Error(err);
  }
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

const createTodo = async (name, completed, userId) => {
  try {
    const todo = await Todo.create({ name, completed, userId });
    return { todo };
  } catch (err) {
    throw new Error(err);
  }
};

const deleteTodo = async (id) => {
  try {
    const todo = await Todo.findOne({ where: { id } });
    if (!todo) {
      throw new Error('Todo does not exist');
    }
    return await Todo.destroy({ where: { id } });
  } catch (err) {
    throw new Error(err);
  }
};

const updateTodo = async (id, name, completed) => {
  const todo = await Todo.findOne({ where: { id } });
  let completedAt = null;
  if (!todo) {
    throw new Error('Todo does not exist');
  }
  if (completed === 'true') {
    completedAt = sequelize.fn('NOW');
  }
  return await Todo.update({ name, completed, completedAt }, { where: { id } });
};

module.exports = {
  getOneTodo,
  createTodo,
  deleteTodo,
  updateTodo,
  getTodoList,
};
