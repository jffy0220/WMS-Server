const express = require('express')
const router = express.Router()
const { getShippingAddress, postShippingAddress, updateShippingAddress } = require('../../controller/shipping_address/ShippingAddress')

router
    .route('/')
    .get(getShippingAddress)
    .post(postShippingAddress)
    .put(updateShippingAddress)

module.exports = router