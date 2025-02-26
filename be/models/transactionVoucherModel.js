const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const Transaction = require('./transactionModel');
const Voucher = require('./voucherModel');

const TransactionVoucher = sequelize.define('transaction_vouchers', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  transaction_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Transaction, // References the Voucher model
      key: 'id',   // References the id field in the Voucher model
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  voucher_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Voucher, // References the Voucher model
      key: 'id',   // References the id field in the Voucher model
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  quantity: {
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

module.exports = TransactionVoucher;