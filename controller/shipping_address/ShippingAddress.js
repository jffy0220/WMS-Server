const query = require('../../db/mysql_connect')

/*
 TODO:
 How do we do a data validation and only insert the fields we want, 
    i.e. if address_2 is null, how do we only insert a address_1, and not input "null"
*/

exports.getShippingAddress = async (req, res, next) => {
    // Get a list of all known shipping address
    let shipping_addresses = await query("SELECT * FROM shipping_address")
    res.send(shipping_addresses)
}

exports.postShippingAddress = async (req, res, next) => {
    // Create a new shipping address
    let data = req.body
    let shipping_address = await query(`INSERT INTO shipping_address (type, address_1, address_2, city, state, country, zip, poc, phone_1, email_1) VALUES (
        '${data.type}',
        '${data.address_1}',
        '${data.address_2}',
        '${data.city}',
        '${data.state}',
        '${data.country}',
        '${data.zip}',
        '${data.poc}',
        '${data.phone_1}',
        '${data.email_1}'
    )`)
    
    
    if (shipping_address.insertId) {
        res.send("Success")
    } else {
        res.send("Failed")
    }
}

exports.updateShippingAddress = async (req, res, next) => {
    let data = req.body
    res.send('Success')

    // We will need to create the sql statement dynamically. How we will do that, I am not sure
    // SQL SYNTAX: UPDATE shipping_address SET x = '${}' WHERE id = ${data.id}
}