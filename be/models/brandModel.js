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
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Set default value to current timestamp
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Set default value to current timestamp
  }
}, {
  timestamps: false, // Adds createdAt and updatedAt fields
})

module.exports = Brand;