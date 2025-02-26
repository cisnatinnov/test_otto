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
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
})

module.exports = Transaction;