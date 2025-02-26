const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const Brand = require('./brandModel');

const Voucher = sequelize.define('vouchers', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  brand_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Brand, // References the Brand model
      key: 'id',   // References the id field in the Brand model
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  point_value: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
})

module.exports = Voucher;