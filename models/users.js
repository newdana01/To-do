const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        age: {
          type: Sequelize.INTEGER,
        },
        email: {
          type: Sequelize.STRING(200),
          unique: true,
        },
        password: {
          type: Sequelize.STRING(500),
        },
        profileImage: {
          type: Sequelize.STRING(2000),
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true, // camel case -> snake case
        modelName: 'User',
        tableName: 'users', // 실제 db table 명
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_cli',
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Todo);
  }
}

module.exports = { User };
