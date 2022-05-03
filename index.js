const express = require('express')
const app = express()
const port = 5000

const shipping_address = require('./routes/shipping_address/ShippingAddress')

app.use('/api/shipping_address', shipping_address)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})