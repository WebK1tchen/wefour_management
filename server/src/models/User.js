
module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    login: {
      type: DataTypes.STRING,
      notNull: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    group: {
      type: DataTypes.STRING
    }
  })
