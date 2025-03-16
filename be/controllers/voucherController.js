const express = require('express')
const uuid = require("uuid").v4
const app = express()
const { success, created, error } = require('../middlewares/response')
const { celebrate } = require('celebrate')
const { voucherSchema } = require('../middlewares/schema')
const Voucher = require('../models/voucherModel')
const moment = require('moment')

app.post('', celebrate({body: voucherSchema}), async(req, res) => {
  let { brand_id, name, point_value } = req.body
  let id = uuid()
  try {
    const brand = await Voucher.create({ id, brand_id, name, point_value })
    created(res, 'Voucher successfully created', brand.toJSON())
  } catch (err) {
    error(res, err)
  }
})

app.put('', celebrate({body: voucherSchema}), async(req, res) => {
  let { brand_id, name, point_value } = req.body
  let id = req.query.id
  try {
    const brand = await Voucher.update({
      brand_id: brand_id,
      name: name,
      point_value: point_value
    },
    {
      where: {
        id: id
      }
    })
    success(res, 'Voucher successfully updated', brand)
  } catch (err) {
    error(res, err)
  }
})

app.delete('/:id', async(req, res) => {
  let id = req.params.id
  try {
    const brand = await Voucher.destroy(
    {
      where: {
        id: id
      }
    })
    success(res, 'Voucher successfully deleted', brand)
  } catch (err) {
    error(res, err)
  }
})

app.get('/:id', async(req, res) => {
  let id = req.params.id
  try {
    const voucher = await Voucher.findByPk(id)
    success(res, '', voucher.toJSON())
  } catch (err) {
    error(res, err)
  }
})

app.get('', async(_req, res) => {
  try {
    const voucher = await Voucher.findAll()
    let vouchers = voucher.map(voucher => voucher.toJSON());
    let lists = vouchers.map(list => {
      return {
        ...list,
        createdAt: moment(list.created_at).format('LLLL'),
        updatedAt: moment(list.updated_at).format('LLLL')
      }
    })
    success(res, '', lists)
  } catch (err) {
    error(res, err)
  }
})

app.get('/brand/:brand_id', async(req, res) => {
  let brand_id = req.params.brand_id
  try {
    const voucher = await Voucher.findAll({
      where: {
        brand_id: brand_id
      }
    })
    let vouchers = voucher.map(voucher => voucher.toJSON());
    success(res, '', vouchers)
  } catch (err) {
    error(res, err)
  }
})

module.exports = app