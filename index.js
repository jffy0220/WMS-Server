const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.use(bodyParser.json()) // json 
app.use(bodyParser.urlencoded({ extended: true })) // x-www-form-urlencoded

const shipping_address = require('./routes/shipping_address/ShippingAddress')

app.use('/api/shipping_address', shipping_address)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})