const express = require('express')
const router = express.Router()
const { getShippingAddress } = require('../../controller/shipping_address/ShippingAddress')

router
    .route('/')
    .get(getShippingAddress)

module.exports = router