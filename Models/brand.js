const { DataTypes } = require("sequelize");
const connection = require("../database/database");

const Brand = connection.define("brands", {
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
  active: {
    type: DataTypes.ENUM(["0", "1"]),
    defaultValue: "1",
  },
});

module.exports = Brand;
