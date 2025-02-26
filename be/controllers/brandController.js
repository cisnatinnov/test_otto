const express = require('express')
const uuid = require("uuid").v4
const app = express()
const { success, created, error } = require('../middlewares/response')
const { celebrate } = require('celebrate')
const { brandSchema } = require('../middlewares/schema')
const Brand = require('../models/brandModel')

app.post('', celebrate({body: brandSchema}), async(req, res) => {
  let { name } = req.body
  let id = uuid()
  try {
    const brand = await Brand.create({ id, name })
    created(res, 'Brand successfully created', brand.toJSON())
  } catch (err) {
    error(res, err)
  }
})

app.put('', celebrate({body: brandSchema}), async(req, res) => {
  let { name } = req.body
  let id = req.query.id
  try {
    const brand = await Brand.update({
      name: name
    },
    {
      where: {
        id: id
      }
    })
    success(res, 'Brand successfully updated', brand)
  } catch (err) {
    error(res, err)
  }
})

app.delete('/:id', async(req, res) => {
  let id = req.params.id
  try {
    const brand = await Brand.destroy(
    {
      where: {
        id: id
      }
    })
    success(res, 'Brand successfully deleted', brand)
  } catch (err) {
    error(res, err)
  }
})

app.get('/:id', async(req, res) => {
  let id = req.params.id
  try {
    const brand = await Brand.findByPk(id)
    success(res, '', brand.toJSON())
  } catch (err) {
    error(res, err)
  }
})

app.get('', async(_req, res) => {
  try {
    const brand = await Brand.findAll()
    let brands = brand.map(brand => brand.toJSON());
    success(res, '', brands)
  } catch (err) {
    error(res, err)
  }
})

module.exports = app