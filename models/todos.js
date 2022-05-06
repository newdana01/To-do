const Sequelize = require('sequelize');

class Todo extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        completed: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
        userId: {
          type: Sequelize.INTEGER,
        },
        completedAt: {
          type: Sequelize.DATE,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true, // camel case -> snake case
        modelName: 'Todo',
        tableName: 'todos', // 실제 db table 명
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_cli',
      }
    );
  }
  static associate(db) {
    db.Todo.belongsTo(db.User);
  }
}

module.exports = { Todo };
