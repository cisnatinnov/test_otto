const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Brand = sequelize.define('brands', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
})

module.exports = Brand;