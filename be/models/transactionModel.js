const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Transaction = sequelize.define('transactions', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  total_points: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

module.exports = Transaction;