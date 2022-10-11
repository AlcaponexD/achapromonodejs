const { DataTypes } = require("sequelize");
const connection = require("../database/database");

const Product = connection.define("product", {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
  spotlight: {
    type: DataTypes.ENUM("1", "0"),
    defaultValue: "0",
  },
  active: {
    type: DataTypes.ENUM("1", "0"),
    defaultValue: "0",
  },
});

module.exports = Product;
