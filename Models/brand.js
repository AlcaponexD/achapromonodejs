const { DataTypes } = require("sequelize");
const connection = require("../database/database");

const Brand = connection.define("brand", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING,
  },
  active: {
    type: DataTypes.ENUM(["0", "1"]),
    defaultValue: '1'
  }
});


module.exports = Brand;
