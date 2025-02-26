const express = require('express')
const app = express()

const brand = require('../controllers/brandController')
const voucher = require('../controllers/voucherController')
const transaction = require('../controllers/transactionController')

app.use('/brands', brand)
app.use('/vouchers', voucher)
app.use('/transactions', transaction)

module.exports = app