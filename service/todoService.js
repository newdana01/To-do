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

module.exports = { getOneTodo };
