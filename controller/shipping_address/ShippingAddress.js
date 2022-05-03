const query = require('../../db/mysql_connect')

exports.getShippingAddress = async (req, res, next) => {
    // Get a list of all known shipping address
    let shipping_addresses = await query("SELECT * FROM shipping_address")
    res.send(shipping_addresses)
}