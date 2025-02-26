const express = require('express')
const uuid = require("uuid").v4
const app = express()
const { success, created, error } = require('../middlewares/response')
const { celebrate } = require('celebrate')
const { redemptionSchema } = require('../middlewares/schema')
const Voucher = require('../models/voucherModel')
const Transaction = require('../models/transactionModel')
const TransactionVoucher = require('../models/transactionVoucherModel')

app.post('/redemption', celebrate({body: redemptionSchema}), async(req, res) => {
  let { vouchers } = req.body
  let id = uuid()
  try {
    // Calculate total points
    let total_points = 0;
    for(const v of vouchers) {
      let voucher_id = v.id
      let quantity = v.quantity
      const voucherData = await Voucher.findByPk(voucher_id)
      let voucher = voucherData.toJSON()
      total_points += voucher.point_value * quantity
    }
    // Create transaction
    const transaction = await Transaction.create({ id, total_points })
    let transaction_id = transaction.id
    // Add voucher details to transaction_voucher
    for(const v of vouchers) {
      let voucher_id = v.id
      let quantity = v.quantity
      await TransactionVoucher.create({ id, transaction_id, voucher_id, quantity })
    }
    created(res, 'Redemption successfully created', transaction.toJSON())
  } catch (err) {
    error(res, err)
  }
})

app.get('/redemption', celebrate({body: redemptionSchema}), async(req, res) => {
  const { transactionId } = req.query;
  try {
    const transactionData = await Transaction.findByPk(transactionId)
    let transaction = transactionData.toJSON()
    const transactions = await TransactionVoucher.findAll({
      where: {
        transaction_id: transactionId
      }
    })
    let transactionVoucher = transactions.map(transaction => transaction.toJSON())
    success(res, '', { transaction: transaction, transactionVoucher: transactionVoucher })
  } catch (err) {
    error(res, err)
  }
})

module.exports = app