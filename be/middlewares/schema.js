const { Joi } = require('celebrate')

const brandSchema = Joi.object().keys({
  name: Joi.string().required()
}).unknown(true)

const voucherSchema = Joi.object().keys({
  brand_id: Joi.string().required(),
  name: Joi.string().required(),
  point_value: Joi.number().required()
}).unknown(true)

const redemptionSchema = Joi.object().keys({
  vouchers: Joi.array().required()
}).unknown(true)

module.exports = {
  brandSchema,
  voucherSchema,
  redemptionSchema
}