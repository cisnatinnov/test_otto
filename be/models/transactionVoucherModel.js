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
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
})

module.exports = TransactionVoucher;